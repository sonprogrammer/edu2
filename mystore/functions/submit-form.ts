// functions/submit-form.ts

import { Handler } from '@netlify/functions'

interface FormData {
  name: string;
}

const handler: Handler = async (event, context) => {
  try {
    const data: FormData = JSON.parse(event.body || '{}');
    const { name } = data;

    // 서버에서 처리 (예: DB 저장, 이메일 전송 등)
    console.log(`Received name: ${name}`);

    // 성공적인 응답 반환
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully!', data }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error processing the form' }),
    };
  }
};

export { handler };
