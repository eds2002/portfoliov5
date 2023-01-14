import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import slugify from '../utils/slugify'
import Footer from './Footer'
import { useInView } from '../hooks/useInView'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion'
import Link from 'next/link'
import { socials } from '../data/socials'
const projects = [
  {
    title: 'Transakt (BETA)',
    stack: ['React', 'Next 13', 'Tailwind', 'Vercel'],
    shortDesc: 'Personal Finance',
    longDesc:
      'Transakt is a personal project designed to take back control of your finances.',
    objective:
      'Transakt is a side project I decided to create when I wanted to get my finances back in control.',
    responsibility: 'UI Design & Development',
    webLink: 'https://www.about.transaktfinance.com',
    gitLink: '',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fwww.hufistore.com_.png?alt=media&token=eb1c7f84-db5a-440a-a4f1-c63855f982ee',
    deskImages: [
      {
        heading: 'A solution to your struggling finances. All in your pocket.',
        paragraph: '',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/transakt%2FLearn%20How%20To%20Start%20And%20Grow%20A%20Fashion%20Business%20(1).png?alt=media&token=9fd05f5b-a7cb-48d0-9af9-632b2b51505a',
        ],
      },
      {
        heading: '',
        paragraph: '',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/transakt%2FLearn%20How%20To%20Start%20And%20Grow%20A%20Fashion%20Business.png?alt=media&token=044c35dc-6f9d-46c3-8eed-a7061c8a5ec6',
        ],
      },
      {
        heading: 'Visualize the important',
        paragraph:
          "Transakt is designed to help you visualize what you don't usually see with normal checkbook apps.",
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/transakt%2Fwww.transaktfinance.com_dashboard_tab%3Daccounts%26account%3D6683c8ae%20(1).png?alt=media&token=0eb84b06-be99-4b12-a445-572a5b84b88a',
        ],
      },
      {
        heading: 'A place to view the important',
        paragraph: '',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/transakt%2Fwww.transaktfinance.com_dashboard_tab%3Ddashboard%20(1).png?alt=media&token=ef06fd23-26b5-4301-a333-ae29baac7cf6',
        ],
      },
      {
        heading: '',
        paragraph: '',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/transakt%2Fwww.transaktfinance.com_dashboard_tab%3Daccounts%26account%3D6683c8ae.png?alt=media&token=ff0244c9-d3a8-4842-8abc-02847dc4b651',
        ],
      },
    ],
  },
  {
    title: 'Sanchez Cleaning',
    stack: ['React', 'Next', 'Tailwind', 'Send Grid API', 'Node JS'],
    shortDesc: 'Freelance',
    longDesc: 'A business website designed to maximize conversions.',
    objective:
      'Create a website that allows my client to get as many leads as possible.',
    responsibility: 'UI Design & Development',
    webLink: 'https://www.sanchezfamilycleaning.com',
    gitLink: '',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fwww.hufistore.com_.png?alt=media&token=eb1c7f84-db5a-440a-a4f1-c63855f982ee',
    deskImages: [
      {
        heading: 'A clean and friendly user interface.',
        paragraph: '',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/sfcs%2Fhome.png?alt=media&token=86d5799a-0564-45e4-816f-87222f48d122',
        ],
      },
      {
        heading: '',
        paragraph: '',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/sfcs%2Fabout.png?alt=media&token=78f14dff-cc29-41c0-8c8c-3d28d8418d6d',
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/sfcs%2Fservices.png?alt=media&token=68964714-0c88-40e4-bd25-3a7a670e5488',
        ],
      },
      {
        heading: 'A built in contact system for user retention.',
        paragraph: '',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/sfcs%2Frequest.png?alt=media&token=339108ae-ad94-4adc-a18f-cb447a2acab2',
        ],
      },
    ],
  },
  {
    title: 'Hufi',
    stack: [
      'React',
      'Next',
      'Tailwind',
      'Shopify API',
      'Firebase',
      'Vercel',
      'Node JS',
      'Puppeteer',
      'Cheerio',
      'Next API Routing',
    ],
    shortDesc: 'E-commerce ',
    longDesc:
      'Hufi is a dropshipping store based in California selling all sorts of products.',
    objective:
      'My job was to create a page that allowed for displaying multiple products, creating high converting product pages, creating an amazing UX experience, & optimization for fast site speeds.',
    responsibility: 'UI Design & Development',
    webLink: 'https://www.hufistore.com/',
    gitLink: 'https://github.com/eds2002/ecomtemplate',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fwww.hufistore.com_.png?alt=media&token=eb1c7f84-db5a-440a-a4f1-c63855f982ee',
    deskImages: [
      {
        heading: '',
        paragraph: '',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fhome%20page.png?alt=media&token=2b330aaf-66a2-4180-80d9-a697baa3547c',
        ],
      },
      {
        heading: '',
        paragraph: '',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fproductpage.png?alt=media&token=abcc5aa6-f54d-4d2b-af62-d04066fe0184',
        ],
      },
      {
        heading: 'Optimized reviews & questions',
        paragraph:
          'Designed to prioritize reviews with images to optimize conversation rates greatly. As for questions, questions can be asked by verified users. Questions will not be public until an admin approves the message and replies to it.',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fproductreviews.png?alt=media&token=edc53264-c44d-41b2-83c6-8d91d0ba6622',
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fquestions.png?alt=media&token=de51ced1-a3e6-4265-b794-71f0bd6da07f',
        ],
      },
      {
        heading: 'Filtering system',
        paragraph: 'Advanced filtering system for collection products.',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fsubcollection%20with%20filter.png?alt=media&token=1deb1bbf-9e9c-4397-a796-f0cc8b72a77f',
        ],
      },
      {
        heading: 'User orders',
        paragraph:
          'A beautifully designed & informative section to view all products that the user has ordered. Users may also view more information in which they can see the order total, the tracking number, and all the products in the order.',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fall%20user%20orders.png?alt=media&token=faa6af4d-a6b4-4f30-8844-d34974e71f32',
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fuserorder.png?alt=media&token=0224653a-b361-4c34-b4e6-87b2d78f53b7',
        ],
      },
      {
        heading: 'Fully optimized for conversions',
        paragraph:
          'Aside from a gorgeous product page, my client is able to show coupon codes on their page, a custom delivery date, current ongoing discounts, and are able to customize the recommended products component.',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fconversions.png?alt=media&token=b9fc2801-c30c-4f53-bf83-631df7a8cfea',
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/hufi%2Fcrosssell.png?alt=media&token=e58be773-3ed7-49d4-b120-6d7b8fba3c04',
        ],
      },
    ],
  },
  {
    title: 'Poshly Finance',
    stack: [
      'React',
      'Next',
      'PostgressSQL',
      'Node',
      'Express',
      'AWS RDS',
      'AWS EC2',
      'AWS Route 53',
      'AWS Amplify',
      'Plaid API',
    ],
    shortDesc: 'Banking',
    longDesc:
      'Poshly is a personal project I decided to create when I realized my finances were not exactly great. I figured storing my most used credit cards in one app would solve this issue. NOTE: Please do NOT use any of your real information.',
    objective:
      'My objective was to create an app to help me understand my credit card debt. I made sure to include the penalty costs of not paying off a debt that was due, and how long I had to pay off that debt.',
    responsibility: 'UI Design & Development',
    webLink: 'https://poshlyfinance.com/',
    gitLink: 'https://github.com/eds2002/poshly-frontend',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/poshly%2Fposhlyfinance.com_user_dashboard%20(4).png?alt=media&token=2334b15c-04f3-4cdf-b02f-5deda40ee7dc',
    deskImages: [
      {
        heading: '',
        paragraph: '',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/poshly%2Fposhlyfinance.com_.png?alt=media&token=fdaa7d19-4408-4cbd-92ab-5047b96c9e46',
        ],
      },
      {
        heading: '',
        paragraph: '',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/poshly%2Fposhlyfinance.com_user_dashboard%20(2).png?alt=media&token=b1c67fb4-b396-4927-a45f-75025a76d474',
        ],
      },
      {
        heading: 'Checking account overview',
        paragraph:
          'One thing that was definitely important to me was checking my expenses. Thanks to Plaid, I was able to create an overview for my account. I was able to show available balance, total spent & total earned within a set amount of time.',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/poshly%2Fposhlyfinance.com_user_dashboard%20(4).png?alt=media&token=2334b15c-04f3-4cdf-b02f-5deda40ee7dc',
        ],
      },
      {
        heading: '',
        paragraph: '',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/poshly%2Fposhlyfinance.com_user_dashboard.png?alt=media&token=1a6034d0-8aa4-4848-9b06-1b2053b2a460',
        ],
      },
      {
        heading: 'Reminders',
        paragraph:
          'Upon logging into your account, if you have a credit card stored, Poshly will remind you of any credit cards that may be due soon, as well as showing you your total credit card debt.',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/poshly%2Fposhlyfinance.com_user_dashboard%20(3).png?alt=media&token=f629c2f1-44bc-4480-b338-bb7f2dde2762',
        ],
      },
    ],
  },
  {
    title: 'Bula',
    stack: ['React', 'Next', 'Tailwind', 'Shopify API'],
    shortDesc: 'E-commerce',
    longDesc:
      'Bula is an online e-commerce store selling wireless microphones based in New Jersey. For a product that is innovative, they needed a website that represented a sense of luxury. They also needed to be able to customize their site in case they needed to change pricing, images, or their description.',
    objective:
      'Create a customizable e-commerce site for a client. My client had to be able to customize the product description, pricing, and images if they wished to do so. My client also needed a site that was fast and optimized for conversions.',
    responsibility: 'UI Design & Development',
    webLink: 'https://www.bulamics.com/',
    gitLink: 'https://github.com/eds2002/bulamics',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/bula%2Fherosection.png?alt=media&token=a05e7aa5-4820-4869-87aa-c900353a38db',
    deskImages: [
      {
        heading: '',
        paragraph: '',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/bula%2Fhomepagefullscreenshot.png?alt=media&token=d979971d-77f0-4095-b577-c29fc1ac578c',
        ],
      },
      {
        heading: '',
        paragraph: '',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/bula%2Fwww.bulamics.com_%20(5).png?alt=media&token=5108a53d-16db-4d5b-bff8-e511b5fb19b7',
        ],
      },
      {
        heading: 'Designed to convert',
        paragraph:
          'My biggest challenge was creating something that would maximize conversions. I figured, designing a beautifully made about section about the product along with FAQs & reviews would maximize conversions as much as possible.',
        urls: [
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/bula%2FThe%20little%20details.png?alt=media&token=b114349a-78e0-4a63-87d6-e8f5ceba8507',
          'https://firebasestorage.googleapis.com/v0/b/portfolioimagehosting.appspot.com/o/bula%2FFAQ%26Reviews.png?alt=media&token=9860fdcc-26b3-4a3e-a182-ae32fd956ebe',
        ],
      },
    ],
  },
]

const Works: React.FC = () => {
  const router = useRouter()
  const [expand, setExpand] = useState(false)
  const [project, setProject] = useState('')

  const handleProjectClick = (name: string) => {
    router.push({ query: `tab=${encodeURI(slugify(name))}` }, undefined, {
      scroll: false,
      shallow: true,
    })
  }

  useEffect(() => {
    if (expand) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [expand])

  useEffect(() => {
    if (!router.query.tab) {
      setExpand(false)
    } else {
      setProject(router.query.tab as string)
      setExpand(true)
    }
  }, [router.query, setExpand, setProject])

  const componentRef = useRef<HTMLElement>(null)
  useInView(componentRef)

  return (
    <React.Fragment>
      <section
        className={`py-16 relative z-[2] transition `}
        ref={componentRef}
      >
        <div className="px-6 mx-auto max-w-7xl">
          <div className="flex flex-col divide-primary-400">
            {projects.map((project, index: number) => (
              <div
                className={`flex lg:flex-row flex-col items-center justify-center py-10`}
                key={project.title}
              >
                <div
                  onClick={() => handleProjectClick(project.title)}
                  className="flex flex-col items-start justify-center flex-1 w-full text-primary-50 md:justify-between md:flex-row md:items-center group"
                >
                  <div className="w-full  group-hover:translate-x-[1%] transition duration-300 py-4 cursor-pointer">
                    <p
                      className="text-3xl font-bold transition duration-200 cursor-pointer md:text-7xl xl:text-8xl group-hover:opacity-70"
                      onClick={() => handleProjectClick(project.title)}
                    >
                      <span>{project.title}</span>
                    </p>
                    <div className="w-full h-px my-2 rounded-full md:hidden bg-primary-600" />
                    <div className="flex transition duration-200 gap-x-1 md:hidden group-hover:opacity-70">
                      {project.stack.map((val, key) => (
                        <React.Fragment key={val}>
                          {key < 3 && (
                            <p className="opacity-80 ">
                              <span>{val},</span>
                            </p>
                          )}
                        </React.Fragment>
                      ))}
                      <p className="opacity-80">
                        <span>& {project.stack.length - 3} more</span>
                      </p>
                    </div>
                  </div>
                  <div className="whitespace-nowrap group-hover:translate-x-[1%] transition duration-300 group-hover:opacity-70">
                    <p className="hidden mt-3 text-base opacity-80 md:max-w-7xl md:block">
                      <span>{project.shortDesc}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AnimatePresence>
        {expand && <ExpandProject expand={expand} project={project} />}
      </AnimatePresence>
    </React.Fragment>
  )
}

const ExpandProject: React.FC<ExpandProps> = ({ expand, project }) => {
  const ref = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    container: ref,
  })

  const height = useTransform(scrollYProgress, [0.5, 1], ['500%', '0%'])
  const y = useTransform(scrollYProgress, [0.5, 1], [-350, 0])

  const router = useRouter()
  const handleBackButton = async () => {
    router.replace('/', undefined, { shallow: true })
  }

  return (
    <React.Fragment>
      <motion.div
        initial={{ y: '100vh' }}
        animate={{ y: 0 }}
        exit={{ y: '100vh' }}
        transition={{ duration: 1, ease: [0.45, 0, 0, 1] }}
        className={`fixed inset-0  bg-primary-850  overflow-y-scroll z-20 overflow-x-hidden`}
        ref={ref}
      >
        <div className="relative">
          <div className="pb-16 mx-auto bg-primary-850 z-[3] relative">
            <div className="sticky top-0 z-10 text-primary-50 backdrop-blur-lg">
              <div className="px-4 mx-auto max-w-7xl">
                <motion.p
                  variants={button}
                  className="py-3 text-sm cursor-pointer pointer-events-auto text-primary-50 w-max"
                  onClick={() => handleBackButton()}
                >
                  Back to home
                </motion.p>
              </div>
            </div>
            <div className="px-4 mx-auto max-w-7xl ">
              {projects.map((prj) => (
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  key={prj.title}
                >
                  {slugify(prj.title) === project && (
                    <>
                      <div className="mt-24">
                        <p className="overflow-hidden text-5xl font-extrabold md:text-9xl">
                          <motion.span variants={item} className="block">
                            {prj.title}
                          </motion.span>
                        </p>
                        <p className="overflow-hidden text-xl">
                          <motion.span variants={item} className="block">
                            {prj.responsibility}
                          </motion.span>
                        </p>
                        <p className="mt-10 text-lg lg:text-2xl opacity-70">
                          <motion.span variants={item} className="block">
                            {prj.longDesc}
                          </motion.span>
                        </p>
                        <p className="relative mt-10 overflow-hidden text-2xl font-bold ">
                          <motion.span variants={item} className="block">
                            Objective
                          </motion.span>
                        </p>
                        <p className="max-w-xl mt-3 overflow-hidden text-base lg:text-lg opacity-70">
                          <motion.span variants={item} className="block">
                            {prj.objective}
                          </motion.span>
                        </p>
                        <p className="overflow-hidden text-2xl font-bold mt-7">
                          <motion.span variants={item} className="block">
                            Technologies
                          </motion.span>
                        </p>
                        <div className="flex flex-wrap ">
                          {prj.stack.map((val) => (
                            <p
                              key={val}
                              className="max-w-xl overflow-hidden text-base lg:text-lg opacity-70"
                            >
                              <motion.span
                                variants={item}
                                className="block mr-3 "
                                key={val}
                              >
                                {val}
                              </motion.span>
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3 mt-10">
                        <motion.a
                          variants={button}
                          href={prj.webLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center px-4 py-2 rounded-full text-primary-900 bg-primary-50"
                        >
                          Visit site
                        </motion.a>
                        {prj.gitLink !== '' && (
                          <motion.a
                            variants={button}
                            href={prj.gitLink}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center px-4 py-2 border border-white rounded-full text-primary-50"
                          >
                            View Repository
                          </motion.a>
                        )}
                      </div>
                      <div className="flex flex-col items-center justify-center mt-10">
                        {prj?.deskImages?.map((image) => (
                          <>
                            {image.heading != '' && (
                              <p className="w-full pt-10 mt-24 mb-2 mr-auto overflow-hidden text-3xl font-bold border-t-4 border-primary-750 sm:text-4xl lg:text-5xl">
                                <motion.span
                                  variants={item}
                                  whileInView="show"
                                  viewport={{ once: true }}
                                  className="block"
                                >
                                  {image?.heading}
                                </motion.span>
                              </p>
                            )}
                            {image.paragraph != '' && (
                              <p className="max-w-2xl mt-6 mb-10 mr-auto overflow-hidden sm:text-lg lg:text-xl">
                                <motion.span
                                  variants={item}
                                  whileInView="show"
                                  viewport={{ once: true }}
                                  className="block"
                                >
                                  {image?.paragraph}
                                </motion.span>
                              </p>
                            )}
                            <div className="relative flex flex-col items-center justify-center w-full h-full gap-10 p-6 mb-10 overflow-hidden bg-primary-800 md:py-12 md:px-32">
                              {image.urls.map((url) => (
                                <div
                                  key={url}
                                  className="relative flex flex-col items-center justify-center w-full h-full gap-10 aspect-video"
                                >
                                  <Image
                                    fill
                                    quality={100}
                                    key={url}
                                    src={url}
                                    alt={'Project image.'}
                                    className="object-contain w-full h-full min-w-full min-h-full"
                                  />
                                </div>
                              ))}
                            </div>
                          </>
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 top-[unset] translate-y-full w-full circle-container h-[15vh]  select-none pointer-events-none z-[1]">
            <motion.div
              initial={{ height: '500%' }}
              style={{ height }}
              transition={{ duration: 1, ease: [0.45, 0, 0, 1] }}
              className="absolute w-[150%]  block rounded-[50%] transform-gpu bg-primary-850 left-[50%] -translate-x-[50%] -translate-y-[50%] shadow-xl"
            />
          </div>
        </div>
        <motion.section
          style={{ y }}
          className="h-[70vh] py-24 bg-primary-50 text-primary-900"
        >
          <div className="px-6 mx-auto max-w-7xl">
            <p className="text-4xl font-extrabold md:text-6xl">
              <motion.span
                variants={item}
                whileInView="show"
                viewport={{ once: true }}
                className="block"
              >
                Let&apos;s work together.
              </motion.span>
            </p>
            <Link href="mailto:es23jr@gmail.com">
              <p className="inline-block mt-2 underline">
                <motion.span
                  variants={item}
                  whileInView="show"
                  viewport={{ once: true }}
                  className="block"
                >
                  es23jr@gmail.com
                </motion.span>
              </p>
            </Link>
            <p className="max-w-md mt-4 text-base sm:text-lg lg:text-xl">
              <motion.span
                variants={item}
                whileInView="show"
                viewport={{ once: true }}
                className="block"
              >
                Interested in working together? Contact me! I&apos;m always
                looking for new positions.
              </motion.span>
            </p>
            {socials.map((social) => (
              <Link
                href={social.link}
                key={social.name}
                rel="noreferrer"
                target="_blank"
              >
                <p className="inline-block mt-6 mr-3 text-sm opacity-60">
                  <motion.span
                    variants={item}
                    whileInView="show"
                    viewport={{ once: true }}
                    className="block"
                  >
                    {social.name}
                  </motion.span>
                </p>
              </Link>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </React.Fragment>
  )
}

export default Works

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.01,
      delay: 0,
    },
  },
}

const item = {
  hidden: { y: '100%' },
  show: { y: 0 },
}
const button = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

type ExpandProps = {
  expand: boolean
  project: string
}
