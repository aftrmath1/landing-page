export default function CTA() {
   return (
     <div className="max-w-7xl mx-auto py-24">
       <div className="text-center py-16 px-6 sm:py-20 sm:px-8 lg:px-10 bg-gradient-to-br from-primary to-purple-500 rounded-2xl">
         <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white sm:text-4xl my-10">
           <span className="block mb-2">Boost your productivity.</span>
           <span className="block">Start using Pipeline today.</span>
         </h2>
         <p className="my-5 text-lg leading-6 text-indigo-200">
           Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
         </p>
         <a
           href="/register"
           className="my-5 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
         >
           Sign up for free
         </a>
       </div>
     </div>
   )
 }
 