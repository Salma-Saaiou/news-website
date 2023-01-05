import { useRouter } from "next/router";


export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className="cursor-pointer flex space-x-8 md:space-x-24 mt-4 text-[15px] md:text-[20px] float-right md:mr-24 text-gray-700">
      <div onClick={() => router.push('/')}>Home</div>
      <div onClick={() => router.push('/feed/1')}>Feed</div>
      {/* <div onClick={() => router.push('/blog/1')}>Blog</div> */}
      {/* <div onClick={() => router.push('/contact')}>Contact</div> */}
      {/* <div onClick={() => router.push('/contacts')}>Contact1</div> */}
      <div onClick={() => window.location.href = 'https://twitter.com/salma_saaiou'}>Twitter</div>
    </div>


  );
};


