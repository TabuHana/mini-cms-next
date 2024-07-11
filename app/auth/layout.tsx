import { Logo } from '@/components/logo';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full h-full lg:grid lg:grid-cols-2'>
      <div className='hidden bg-blue-100 lg:flex flex-col justify-between p-4'>
        <Logo />
        <p className='font-bold text-lg text-center'>Quick start your buisness today!</p>
      </div>
      <div className='p-4'>
        <div className='lg:hidden'>
          <Logo />
        </div>
        <div className='h-full px-10 lg:px-20 pt-20 mx-auto max-w-2xl'>{children}</div>
      </div>
    </div>
  );
}