import React from 'react'

export function Userprofile(props) {

  useEffect(() => {
    document.title = "UserProfile";
    !localStorage.getItem('beltoken') && window.location.replace('/authentification');
  }, []);

  return (
    <>
      <h1>hello userProfile</h1>

    </>
  )
}
