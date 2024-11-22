// next.config.js
import { withPigment } from '@pigment-css/nextjs-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 설정 옵션을 추가
  reactStrictMode: true,
};

export default withPigment(nextConfig);
