

$(()=> {

  $('#navbar').load('/components/navbar.html',signupifnoaccount)
  $('#footer').load('/components/footer.html')
  $('#content').load('/components/allposts.html')

})


function signupifnoaccount() {
      window.currentuser=window.localStorage.user ? JSON.parse(window.localStorage.user) :null
      if(!currentuser){
         $.post('/api/users',{},(user)=>{
               if(user){
               console.log('Registered in facebook as',user.name)
               window.localStorage.user=JSON.stringify(user)
               currentuser=user
               $('#nav-username').text(currentuser.name)
               }
         })
      }
      else {
        console.log('Resuming facebook acoount as',currentuser.name)
        $('#nav-username').text(currentuser.name)
      }
}


