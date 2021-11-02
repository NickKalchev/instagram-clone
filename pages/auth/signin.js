import { getProviders, signIn as SignInProvider } from "next-auth/react";
import picture from "../../public/images/signin.png";
import logo from "../../public/images/header-logo-mobile.png";
import Header from '../../components/Header';

function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="bg-[#fafafa] h-screen flex items-center justify-center">
        <div className="mx-10">
          <img className="w-100 h-200" src={picture.src} alt="" />
        </div>
        <div className="mt-30 flex flex-col items-center">
          <img className="w-50 h-20" src={logo.src} alt="" />
          <p className="text-gray-500 text-lg font-semibold mb-10">
            This is an Instagram Clone created by{" "}
            <a
              className="text-indigo-600 hover:text-red-500"
              href="https://nick-kalchev.web.app"
            >
              N!ck
            </a>
          </p>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="py-4 px-9 bg-blue-500 rounded-3xl text-white"
                onClick={() =>
                  SignInProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signin;
