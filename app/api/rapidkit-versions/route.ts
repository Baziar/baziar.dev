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

export async function GET() {
  try {
    const [npmRes, vscodeRes] = await Promise.all([
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
    ]);

    let npmVersion = '0.12.3'; // Fallback
    let vscodeVersion = '0.4.1'; // Fallback

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

    return NextResponse.json({
      npm: npmVersion,
      vscode: vscodeVersion,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error fetching RapidKit versions:', error);

    // Return fallback versions on error
    return NextResponse.json({
      npm: '0.12.3',
      vscode: '0.4.1',
      updatedAt: new Date().toISOString(),
      error: 'Failed to fetch latest versions',
    });
  }
}
