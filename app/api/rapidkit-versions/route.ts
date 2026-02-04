import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Cache for 1 hour

interface NPMResponse {
  'dist-tags': {
    latest: string;
  };
}

interface VSCodeResponse {
  versions: Array<{
    version: string;
  }>;
}

interface PyPIResponse {
  info?: {
    version?: string;
  };
  releases?: Record<
    string,
    Array<{
      upload_time_iso_8601?: string;
    }>
  >;
}

export async function GET() {
  try {
    const [npmRes, vscodeRes, pypiRes] = await Promise.all([
      // Fetch NPM version
      fetch('https://registry.npmjs.org/rapidkit', {
        next: { revalidate: 3600 },
      }),
      // Fetch VS Code extension version
      fetch('https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json;api-version=3.0-preview.1',
        },
        body: JSON.stringify({
          filters: [
            {
              criteria: [
                {
                  filterType: 7,
                  value: 'rapidkit.rapidkit-vscode',
                },
              ],
            },
          ],
          flags: 914,
        }),
        next: { revalidate: 3600 },
      }),
      // Fetch PyPI (rapidkit-core) metadata
      fetch('https://pypi.org/pypi/rapidkit-core/json', {
        next: { revalidate: 3600 },
      }),
    ]);

    let npmVersion = '0.16.4'; // Fallback
    let pipVersion = '0.2.2rc1'; // Fallback
    let pipReleased: string | null = null;
    let vscodeVersion = '0.6.1'; // Fallback

    // Parse NPM version
    if (npmRes.ok) {
      const npmData: NPMResponse = await npmRes.json();
      npmVersion = npmData['dist-tags']?.latest || npmVersion;
    }

    // Parse VS Code version
    if (vscodeRes.ok) {
      const vscodeData = await vscodeRes.json();
      const extensionData = vscodeData.results?.[0]?.extensions?.[0];
      if (extensionData?.versions?.[0]?.version) {
        vscodeVersion = extensionData.versions[0].version;
      }
    }

    // Parse PyPI (rapidkit-core) version and release time
    if (pypiRes.ok) {
      const pypiData: PyPIResponse = await pypiRes.json();
      const version = pypiData.info?.version;
      if (version) {
        pipVersion = version;
        const files = pypiData.releases?.[version] || [];
        // Prefer the first upload timestamp if available
        pipReleased = files[0]?.upload_time_iso_8601 || null;
      }
    }

    return NextResponse.json({
      npm: npmVersion,
      pip: pipVersion,
      pipReleasedAt: pipReleased,
      vscode: vscodeVersion,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error fetching RapidKit versions:', error);

    // Return fallback versions on error
    return NextResponse.json({
      npm: '0.16.4',
      pip: '0.2.2rc1',
      pipReleasedAt: null,
      vscode: '0.6.1',
      updatedAt: new Date().toISOString(),
      error: 'Failed to fetch latest versions',
    });
  }
}
