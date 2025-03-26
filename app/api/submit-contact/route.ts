import { NextResponse } from 'next/server';
import { google } from 'googleapis';

interface ContactFormData {
  email: string;
  company: string;
  timestamp: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    
    if (!body.email || !body.company) {
      return NextResponse.json(
        { error: 'Email and company are required' },
        { status: 400 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = 'Sheet1!A:C'; 
    
    const values = [
      [body.email, body.company, body.timestamp]
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    return NextResponse.json({ 
      success: true,
      message: 'Data submitted successfully',
      rowsAdded: response.data.updates?.updatedRows || 0
    });
    
  } catch (error) {
    console.error('Error submitting contact form:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}