import { useState } from "react"

export const AppInfo = () => {
   const[appInfo , setAppInfo] = useState({
    "introduction": {
      "title": "About This App",
      "description": "This blog app is a salubrious project that is set out with sagagious arragement of posts in well-organized order."
    },
    "features": {
      "title": "Features",
      "items": [
        "Create, edit, and delete posts",
        "Search for posts by title or content",
        "Responsive design",
        "Integration with a REST API"
      ]
    },
    "technologies": {
      "title": "Technologies Used",
      "items": ["React", "React Router","React Bootstrap", "Axios", "Date-fns" , "Formik Validation"]
    },
    "contact": {
      "title": "Contact",
      "description": "If you have any questions or feedback, feel free to reach out.",
      "email": "winzawyair@gmail.com",
      "github": "https://github.com/YeZaw2003NeoPhenon"
    }
  })
  return {appInfo , setAppInfo}
}

