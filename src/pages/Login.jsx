import Logo from "../assets/img/better.png"
import Button from "../components/button/Button"
import Input from "../components/input/Input"
 function Login() {
   return (
     <div className="min-w-[320px] font-campton bg-background-ing bg-center bg-cover bg-no-repeat md:py-14">
        <main className="min-h-screen flex justify-center items-center p-4 md:p-10 ">
          <div className=" overflow-hidden lg:max-w-1160 md:flex mx-auto flex-wrap justify-center rounded-3xl md:rounded-6xl">
            <div className=" bg-[#084B3E;] p-4 md:p-55 sm:p-8 flex flex-col justify-between md:w-left">
              <div>
                <img src={Logo} alt="Logo"/>
              </div>
              <h2 className="text-yellow text-2.9xl mt-12 mb-8 leading-45 md:mb-0">Say hello to global food and beverage producers and suppliers, all in one place</h2>
            </div>
            <div className="bg-[#ffffff;] p-4 sm:p-8 md:p-55 flex flex-col md:w-right md:min-h-calc">
              <h1 className="text-34 text-black leading-42 font-medium tracking-0.5 mt-5 md:mt-0">Let's get started <br/> with a few simple steps</h1>
              <form method="post" className="py-10 flex flex-col flex-grow w-450 max-w-full">
                <label className="after:content-['*'] after:ml-0.5 after:text-red-500 text-gray font-medium text-base">
                  Email
                </label>
                <Input type="email" />
                <label className="after:content-['*'] after:ml-0.5 after:text-red-500 text-gray font-medium text-base">
                  Full name
                </label>
                <Input type="text" />
                <label className="after:content-['*'] after:ml-0.5 after:text-red-500 text-gray font-medium text-base">
                  Password
                </label>
                <Input type="password" />
                <Button text="Sign up" />
              </form>
              <div className="text-gray-light text-sm font-semibold w-310 max-w-full mb-6 md:mb-0">
                <p>By signing up, you agree to our <a className="underline" href="/">Terms of Service.</a> Already have an account? <a href="/" className="underline text-green">Log in</a></p>
              </div>
            </div>
          </div>
        </main>
     </div>
   )
 }
 
 export default Login