import { NextResponse } from 'next/server';
import { ApiFactory, createServerStorage } from "@maestri/sdk"

export async function POST(request: Request) {
  try {
    const storage = createServerStorage();
    const api = new ApiFactory(storage);
    const auth = api.getAuthService();

    await auth.testAuth('001811.3a8cf4590bed409181c547aa91f8e093.0650');

    return NextResponse.redirect(new URL('/WebApp', request.url));
  } catch (error: any) {
    console.error('Auth error:', error);

    if (error.response) {
      return NextResponse.json({
        error: `API error: ${error.response.status} ${error.response.data?.message || 'Unknown error'}`
      }, { status: error.response.status });
    }

    return NextResponse.json(
      { error: 'Something went wrong', details: error.message },
      { status: 500 }
    );
  }
}
