export default function auth({ next, router }) {
   let user = localStorage.getItem("userData")

   if (user == null) {
      return router.push({ name: '/' })
   }
   return next();
}