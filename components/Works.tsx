import Image from "next/image"
import { useRouter } from "next/router"
import React, { useEffect, useRef } from "react"
import { useState } from "react"
import slugify from '../utils/slugify'
import Footer from "./Footer"
const projects = [
  {
    title:'Hufi',
    stack:['React','Next','Tailwind','Shopify API','Firebase','Vercel','Node JS','Puppeteer','Cheerio','Next API Routing'],
    shortDesc:'A general e-commerce stored based out of California.',
    longDesc:'Hufi is a dropshipping store based in California selling all sorts of products.',
    objective:'My job was to create a page that allowed for displaying multiple products, creating high converting product pages, creating an amazing UX experience, & optimization for fast site speeds.',
    responsibility:"UI Design & Development",
    webLink:"https://www.hufistore.com/",
    gitLink:"https://github.com/eds2002/ecomtemplate",
    thumbnail:"https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fwww.hufistore.com_.png?alt=media&token=eb1c7f84-db5a-440a-a4f1-c63855f982ee",
    deskImages:[
      {
        heading:"",
        paragraph:"",
        urls:["https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fhome%20page.png?alt=media&token=2b330aaf-66a2-4180-80d9-a697baa3547c"]
      },
      {
        heading:"",
        paragraph:"",
        urls:["https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fproductpage.png?alt=media&token=abcc5aa6-f54d-4d2b-af62-d04066fe0184"]
      },
      {
        heading:"Optimized reviews & questions",
        paragraph:"Designed to prioritize reviews with images to optimize conversation rates greatly. As for questions, questions can be asked by verified users. Questions will not be public until an admin approves the message and replies to it.",
        urls:["https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fproductreviews.png?alt=media&token=edc53264-c44d-41b2-83c6-8d91d0ba6622","https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fquestions.png?alt=media&token=de51ced1-a3e6-4265-b794-71f0bd6da07f"]
      },
      {
        heading:"Filtering system",
        paragraph:"Advanced filtering system for collection products.",
        urls:["https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fsubcollection%20with%20filter.png?alt=media&token=1deb1bbf-9e9c-4397-a796-f0cc8b72a77f"]
      },
      {
        heading:"User orders",
        paragraph:"A beautifully designed & informative section to view all products that the user has ordered. Users may also view more information in which they can see the order total, the tracking number, and all the products in the order.",
        urls:["https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fall%20user%20orders.png?alt=media&token=faa6af4d-a6b4-4f30-8844-d34974e71f32","https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fuserorder.png?alt=media&token=0224653a-b361-4c34-b4e6-87b2d78f53b7"]
      },
      {
        heading:"Fully optimized for conversions",
        paragraph:"Aside from a gorgeous product page, my client is able to show coupon codes on their page, a custom delivery date, current ongoing discounts, and are able to customize the recommended products component.",
        urls:["https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fconversions.png?alt=media&token=b9fc2801-c30c-4f53-bf83-631df7a8cfea","https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fcrosssell.png?alt=media&token=e58be773-3ed7-49d4-b120-6d7b8fba3c04"]
      },
    ]
  },
  {
    title:'Poshly Finance',
    stack:['React','Next','PostgressSQL','Node','Express','AWS RDS','AWS EC2','AWS Route 53', 'AWS Amplify','Plaid API'],
    shortDesc:'A web app to manage your finances.',
    longDesc:'Poshly is a personal project I decided to create when I realized my finances were not exactly great. I figured storing my most used credit cards in one app would solve this issue.',
    objective:'My objective was to create an app to help me understand my credit card debt. I made sure to include the penalty costs of not paying off a debt that was due, and how long I had to pay off that debt.',
    responsibility:"UI Design & Development",
    webLink:"https://poshlyfinance.com/",
    gitLink:"https://github.com/eds2002/poshly-frontend",
    thumbnail:"https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/poshly%2Fposhlyfinance.com_user_dashboard%20(4).png?alt=media&token=2334b15c-04f3-4cdf-b02f-5deda40ee7dc",
    deskImages:[
      {
        heading:"",
        paragraph:"",
        urls:["https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/poshly%2Fposhlyfinance.com_.png?alt=media&token=fdaa7d19-4408-4cbd-92ab-5047b96c9e46"]
      },
      {
        heading:"",
        paragraph:"",
        urls:["https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/poshly%2Fposhlyfinance.com_user_dashboard%20(2).png?alt=media&token=b1c67fb4-b396-4927-a45f-75025a76d474"]
      },
      {
        heading:"Checking account overview",
        paragraph:"One thing that was definitely important to me was checking my expenses. Thanks to Plaid, I was able to create an overview for my account. I was able to show available balance, total spent & total earned within a set amount of time.",
        urls:["https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/poshly%2Fposhlyfinance.com_user_dashboard%20(4).png?alt=media&token=2334b15c-04f3-4cdf-b02f-5deda40ee7dc"]
      },
      {
        heading:"",
        paragraph:"",
        urls:["https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/poshly%2Fposhlyfinance.com_user_dashboard.png?alt=media&token=1a6034d0-8aa4-4848-9b06-1b2053b2a460"]
      },
      {
        heading:"Reminders",
        paragraph:"Upon logging into your account, if you have a credit card stored, Poshly will remind you of any credit cards that may be due soon, as well as showing you your total credit card debt.",
        urls:["https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/poshly%2Fposhlyfinance.com_user_dashboard%20(3).png?alt=media&token=f629c2f1-44bc-4480-b338-bb7f2dde2762"]
      }
    ]
  },
  {
    title:'Bula',
    stack:['React','Next','Tailwind','Shopify API'],
    shortDesc:'An online microphone store based in New Jersey.',
    longDesc:'Bula is an online e-commerce store selling wireless microphones based in New Jersey. For a product that is innovative, they needed a website that represented a sense of luxury. They also needed to be able to customize their site in case they needed to change pricing, images, or their description.',
    objective:'Create a customizable e-commerce site for a client. My client had to be able to customize the product description, pricing, and images if they wished to do so. My client also needed a site that was fast and optimized for conversions.',
    responsibility:"UI Design & Development",
    webLink:"https://www.bulamics.com/",
    gitLink:"https://github.com/eds2002/bulamics",
    thumbnail:"https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/bula%2Fherosection.png?alt=media&token=a05e7aa5-4820-4869-87aa-c900353a38db",
    deskImages:[
      {
        heading:"",
        paragraph:"",
        urls:["https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/bula%2Fhomepagefullscreenshot.png?alt=media&token=d979971d-77f0-4095-b577-c29fc1ac578c",]
      },
      {
        heading:"",
        paragraph:"",
        urls:["https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/bula%2Fwww.bulamics.com_%20(5).png?alt=media&token=5108a53d-16db-4d5b-bff8-e511b5fb19b7"]
      },
      {
        heading:"Designed to convert",
        paragraph:"My biggest challenge was creating something that would maximize conversions. I figured, designing a beautifully made about section about the product along with FAQs & reviews would maximize conversions as much as possible.",
        urls:[
          "https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/bula%2FThe%20little%20details.png?alt=media&token=b114349a-78e0-4a63-87d6-e8f5ceba8507",
          "https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/bula%2FFAQ%26Reviews.png?alt=media&token=9860fdcc-26b3-4a3e-a182-ae32fd956ebe",
        ]
      }
    ]
  },
  {
    title:'Blog.',
    stack:['Next','React','Node','Express','MySQL','Heroku','Netlify','Tailwind','Styled Components'],
    shortDesc:'A personal blog site.',
    longDesc:'Blog is a personal blog site I decided to create after being inspired by dribbble. I wanted to make it as feature-packed as possible!',
    objective:'Create a blog app that is unlike other full stack blog tutorials on youtube.',
    responsibility:"UI Design & Development",
    webLink:"https://blogappfrontend.vercel.app/",
    gitLink:"https://github.com/eds2002/Blog-Crud-Fullstack-app",
    thumbnail:"https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/blogApp%2FScreen%20Shot%202022-10-30%20at%208.52.20%20PM.png?alt=media&token=189c0e46-07ca-4bc5-8c28-ea24aa359d80",
    deskImages:[
      {
        heading:"",
        paragraph:"",
        urls:["https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/blogApp%2Fblogappfrontend.vercel.app_%20(7).png?alt=media&token=79bf5d0e-8165-4fd4-afb0-7bd1b6bff9cf"]
      },
      {
        heading:"",
        paragraph:"",
        urls:["https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/blogApp%2Fblogappfrontend.vercel.app_%20(4).png?alt=media&token=dc6ea172-d4d1-4368-b541-c6c3a736de23"]
      },
      {
        heading:"Bookmarks",
        paragraph:"Users who have an account may add a post to their bookmarks.",
        urls:["https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/blogApp%2Fblogappfrontend.vercel.app_%20(2).png?alt=media&token=dbb0f746-bce0-4031-ab54-94f038907efc"]
      },
      {
        heading:"User dashboard",
        paragraph:"Users have a dedicated page to unpublish/publish their posts, delete their posts, or even edit their posts. ",
        urls:["https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/blogApp%2Fblogappfrontend.vercel.app_%20(5).png?alt=media&token=95843b78-864d-4720-938e-20899340eb7b"]
      },
      {
        heading:"Public profiles",
        paragraph:"All authors have a public profile where it are able to be shared publicly.",
        urls:["https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/blogApp%2Fblogappfrontend.vercel.app_%20(8).png?alt=media&token=19ecef0f-8534-46b6-83d4-851eb2d74176"]
      },
      {
        heading:"Comments",
        paragraph:"Verified users may leave comments on blog posts. Authors of that post have the ability to delete any comment from their posts.",
        urls:["https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/blogApp%2Fblogappfrontend.vercel.app_blog_post_44.png?alt=media&token=42d39275-40a7-41cf-bc1b-975858184975","https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/blogApp%2Fblogappfrontend.vercel.app_blog_post_44%20(1).png?alt=media&token=c4d26495-be21-43f7-a9e7-a7448e3330da"]
      },
      {
        heading:"Blog post editing",
        paragraph:"Authors may go back and edit their posts through Blog[Studio] if they wish to do so.",
        urls:["https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/blogApp%2Fblogappfrontend.vercel.app_%20(9).png?alt=media&token=2fbfa7d4-9f89-4f99-863a-c0b58f840b7a"]
      },
    ]
  },
]



const Works:React.FC = () => {
  const router = useRouter()
  const [expand,setExpand] = useState(false)
  const [project,setProject] = useState("")


  const handleProjectClick = (name:string) =>{
    router.push({query:encodeURI(slugify(name))},undefined,{scroll:false,shallow:true})
  }

  useEffect(()=>{
    if(router.asPath.slice(2) === ""){
      setExpand(false)
    }else{
      setProject(router.asPath.slice(2))
      setExpand(true)
    }
  },[router.asPath])


  return (
    <React.Fragment>
      <section className = {`py-16 bg-background transition duration-500 ease-[cubic-bezier(.07,.47,.24,.97)]`}>
        <div className = "px-6 mx-auto max-w-7xl">
          <div className = "flex flex-col divide-y-2">
            {projects.map((project)=>(
              <div className = {`flex lg:flex-row flex-col items-center justify-center py-10`} key = {project.title}>
                <div className = "flex flex-col items-start justify-center flex-1 w-full text-onBackground">
                  <h3 
                    className = "text-3xl font-bold cursor-pointer md:text-3xl"
                    onClick = {()=>handleProjectClick(project.title)}
                  >
                    {project.title}
                  </h3>
                  <div className = "flex gap-x-1">
                    {project.stack.map((val,key)=>(
                      <React.Fragment key = {val}>
                        {key < 3 && (
                          <p className = "opacity-80">{val},</p>
                        )} 
                      </React.Fragment>
                    ))}
                    <span className = "opacity-80">& {project.stack.length - 3} more</span>
                  </div>
                  <div className = 'max-w-sm'>
                    <p className = "hidden mt-3 text-base opacity-80 md:max-w-7xl sm:block">{project.shortDesc}</p>
                  </div>  
                </div>  
                <div 
                  className = "flex-1 w-full h-full mt-4 overflow-hidden bg-gray-200 cursor-pointer rounded-xl aspect-video md:mt-0"
                  onClick = {()=>handleProjectClick(project.title)}
                >
                  <img src = {project?.thumbnail} className = "object-cover w-full h-full"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ExpandProject expand = {expand} project = {project}/>
    </React.Fragment>
  )
}


type ExpandProps = {
  expand:boolean,
  project:string,
}

const ExpandProject:React.FC<ExpandProps> = ({expand,project})=>{
  const router = useRouter()
  const divRef = useRef<any>(null);
  const handleBackButton = async () =>{
    router.replace('/',undefined,{shallow:true})
  }



  useEffect(()=>{
    if(expand){
      document.body.style.overflow = "hidden"
      divRef.current.scrollTop = 0
    }else{
      document.body.style.overflow = ""
    }
  },[expand])
  return(
    <React.Fragment>
      <div 
        className = {`fixed inset-0  ${expand ? 'translate-y-0' : 'translate-y-full' } bg-white transition duration-1000 ease-[cubic-bezier(.51,.51,0,1)] overflow-y-scroll`}
        ref = {divRef}
      >
        <div className = "mx-auto mb-16">
          <div className = "sticky top-0 z-10 bg-background backdrop-blur-lg">
            <div className="px-6 mx-auto max-w-7xl">
              <p 
                className = "py-3 text-sm cursor-pointer pointer-events-auto text-onBackground w-max"
                onClick = {()=>handleBackButton()}
              >
                Back to home
              </p>
            </div>
          </div>
          <div className = "px-4 mx-auto max-w-7xl">
            {projects.map((prj)=>(
              <React.Fragment key = {prj.title}>
                {slugify(prj.title) === project && (
                  <>
                    <div className = "mt-24">
                      <h6 className = "text-5xl font-extrabold md:text-9xl">{prj.title}</h6>
                      <span className = "text-xl">{prj.responsibility}</span>
                      <p className = "mt-10 text-lg lg:text-2xl opacity-70">{prj.longDesc}</p>
                      <h6 className = "mt-10 text-2xl font-bold">Objective</h6>
                      <p className = "max-w-xl mt-3 text-base lg:text-lg opacity-70">{prj.objective}</p>
                      <h6 className = "text-2xl font-bold mt-7">Technologies</h6>
                      <p className = "max-w-xl mt-3 text-base lg:text-lg opacity-70">
                      {prj.stack.map((val)=>(
                        <span className = "inline-block mr-3" key = {val}>{val}</span>
                      ))}
                      </p>
                    </div>
                    <div className = "flex gap-3 mt-10">
                      <a href = {prj.webLink} target = "_blank" rel="noreferrer" className = "px-4 py-2 text-white bg-black rounded-full">
                        Visit site
                      </a>
                      <a href = {prj.gitLink} target = "_blank" rel="noreferrer" className = "px-4 py-2 text-black border border-black rounded-full">
                        View Repository
                      </a>
                    </div>
                    <div className = "flex flex-col items-center justify-center mt-10">
                      {prj?.deskImages?.map((image)=>(
                        <>
                          {image.heading != "" && (<h4 className = "w-full pt-10 mt-24 mr-auto text-3xl font-bold border-t-4 border-black sm:text-4xl lg:text-5xl">{image?.heading}</h4>)}
                          {image.paragraph != "" && (<p className = "max-w-2xl mt-6 mb-10 mr-auto sm:text-lg lg:text-xl">{image?.paragraph}</p>)}
                          <div className = "w-full h-full p-6 mb-10 bg-gray-100 md:py-12 md:px-32">
                            <div className = "flex flex-col w-full h-full gap-10 ">
                              {image.urls.map((url)=>(
                                <img 
                                  key = {url}
                                  src = {url} 
                                  alt = {"Project image." }
                                  className = "object-contain"
                                />
                              ))}
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <Footer/>
      </div>
    </React.Fragment>
  )
}

export default Works