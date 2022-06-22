export default function auth({ next, router }) {
    let user = localStorage.getItem("userData")
   console.log(user,"vishal");
    if (user ===null) { 
      router.push('/login');
      
    }
    return next();
  }
