import Bodytainer from "@/components/bodytainer";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="">
      <hr className="z-10 top-[65px] w-full left-0 sticky " />
      <hr className="flex absolute border-1 z-20 left-0 top-[65px] w-full border-primary-foreground dark:border-black" />
      <Header />
      <Bodytainer>
        <div className="border divide-x sm:grid-cols-2 grid pb12 col-span-2">
          <InstantRollbacks />
          <Conformance />
          <Scale />
        </div>
        <Footer />
      </Bodytainer>
    </div>
  );
}

const Conformance = () => {
  return (
    <div className="grid p-10 lg:p-12">
      <div className="h-fit grid gap-4">
        <p className="flex gap-2 items-center text-muted-foreground">
          <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16"><path clipRule="evenodd" d="M4.25 0C3.00736 0 2 1.00736 2 2.25V11V11.25V11.5C2 12.5252 2.61705 13.4062 3.5 13.792V11.5V11.25V11C3.5 10.4477 3.94772 10 4.5 10H12.5V11.2305V12.5H10.5V14H12.5H14V12.5V11.2305V10V8.5V0.75V0H13.25H4.25ZM12.5 8.5V1.5H4.25C3.83579 1.5 3.5 1.83579 3.5 2.25V8.70802C3.80623 8.57422 4.14445 8.5 4.5 8.5H12.5ZM5.5 11.5C5.22386 11.5 5 11.7239 5 12V16L7 14.75L9 16V12C9 11.7239 8.77614 11.5 8.5 11.5H5.5Z" fill="currentColor" fillRule="evenodd"></path></svg>
          Conformance
        </p>
        <p className="text-xl lg:text-2xl tracking-tight leading-snug font-medium text-muted-foreground">
        <span className="text-primary font-semibold ">Move fast, don&apos;t break things.</span> Keep quality high while maintaining velocity with Enterprise Monorepos
        </p>
      </div>
      <div className="border rounded-t-lg">
        
      </div>
    </div>
  )
}

const InstantRollbacks = () => {
  return (
    <div className="grid gap-4 p-10 lg:p-12">
      <div className="h-fit grid gap-4">
        <p className="flex gap-2 items-center text-muted-foreground">
        <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16"><path fillRule="evenodd" clipRule="evenodd" d="M13.5 8C13.5 4.96643 11.0257 2.5 7.96452 2.5C5.42843 2.5 3.29365 4.19393 2.63724 6.5H5.25H6V8H5.25H0.75C0.335787 8 0 7.66421 0 7.25V2.75V2H1.5V2.75V5.23347C2.57851 2.74164 5.06835 1 7.96452 1C11.8461 1 15 4.13001 15 8C15 11.87 11.8461 15 7.96452 15C5.62368 15 3.54872 13.8617 2.27046 12.1122L1.828 11.5066L3.03915 10.6217L3.48161 11.2273C4.48831 12.6051 6.12055 13.5 7.96452 13.5C11.0257 13.5 13.5 11.0336 13.5 8Z" fill="currentColor"></path></svg>
          Instant Rollbacks
        </p>
        <p className="text-xl lg:text-2xl tracking-tight leading-snug font-medium text-muted-foreground">
          <span className="text-primary font-semibold ">Go ahead, deploy on Friday.</span> Instantly rollback to a working deployment.
        </p>
        <div className="grid mt-4 text-sm">
          <div className="border items-center max-w-[330px] w-fit flex shadow-sm bg-white rounded-lg p-3 gap-4">
            <div className="grid grow gap-1">
              <div className="flex justify-between text-muted-foreground"><p className="max-lg:hidden">vercel-site/<span className="text-primary">jvjb4ynna</span></p><p className="max-lg:text-xs">1d ago</p></div>
              <p className="flex justify-between items-center gap-4"><span className="text-xs items-end h-full flex">ba5f55f</span><span>Update bento<span className="max-lg:hidden"> box design</span></span></p>
            </div>
            <div className=" border-4 rounded-full size-9 grid place-items-center text-xs font-medium">90</div>
          </div>
          <div className="relative grid place-items-center">
            <svg data-size="large" fill="none" height="152" viewBox="0 0 117 152" width="117">
              <path d="M3.99999 4L3.99999 60C3.99999 66.6274 9.37258 72 16 72L104 72C110.627 72 116 77.3726 116 84L116 152" stroke="url(#paint0_linear_1364_100888)" strokeWidth="2"></path>
              <path d="M3.99999 4L3.99999 60C3.99999 66.6274 9.37258 72 16 72L104 72C110.627 72 116 77.3726 116 84L116 152" stroke="url(#paint1_linear_1364_100888)" strokeWidth="2"></path>
              <g clip-path="url(#clip0_1364_100888)">
                <path clipRule="evenodd" d="M4 0.5L8 7.5H0L4 0.5Z" fill="#45DEC4" fillRule="evenodd"></path>
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1364_100888" x1="116" x2="4" y1="72" y2="72">
                  <stop stop-color="#E5484D"></stop><stop offset="0.5" stop-color="#FFC634"></stop>
                  <stop offset="1" stop-color="#45DEC4"></stop>
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1364_100888" x1="116" x2="116" y1="152" y2="1.56712e-05">
                  <stop stop-color="var(--primary-foreground)"></stop>
                  <stop offset="0.322368" stop-color="var(--primary-foreground)" stop-opacity="0"></stop>
                </linearGradient>
                <clipPath id="clip0_1364_100888">
                  <rect fill="white" height="8" width="8"></rect>
                </clipPath>
              </defs>
            </svg>
            <svg className="lg: hidden" data-size="small" fill="none" height="88" viewBox="0 0 129 88" width="129">
              <path d="M3.99999 4.00001L3.99999 28.4324C3.99999 35.0598 9.37258 40.4324 16 40.4324L116 40.4324C122.627 40.4324 128 45.805 128 52.4324L128 88" stroke="url(#paint0_linear_6_107)" strokeWidth="2"></path>
              <path d="M3.99999 4.00001L3.99999 28.4324C3.99999 35.0598 9.37258 40.4324 16 40.4324L116 40.4324C122.627 40.4324 128 45.805 128 52.4324L128 88" stroke="url(#paint1_linear_6_107)" strokeWidth="2"></path>
              <g clipPath="url(#clip0_6_107)">
                <path clipRule="evenodd" d="M4 0.5L8 7.5H0L4 0.5Z" fill="#45DEC4" fillRule="evenodd"></path>
              </g>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_107" x1="98" x2="34" y1="40.4324" y2="40.4324">
                  <stop stop-color="#E5484D"></stop>
                  <stop offset="0.5" stop-color="#FFC634"></stop>
                  <stop offset="1" stop-color="#45DEC4"></stop>
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_6_107" x1="98" x2="98" y1="88" y2="-2.37837">
                  <stop stop-color="var(--ds-background-200)"></stop>
                  <stop offset="0.322368" stop-color="var(--ds-background-200)" stop-opacity="0"></stop>
                </linearGradient>
                <clipPath id="clip0_6_107"><rect fill="white" height="8" width="8"></rect></clipPath>
              </defs>
            </svg>
            <div className="absolute left-[calc(50%-8px)] top-[calc(50%-20px)] border bg-white p-2 rounded-full" data-version="v1">
              <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.96452 2.5C11.0257 2.5 13.5 4.96643 13.5 8C13.5 11.0336 11.0257 13.5 7.96452 13.5C6.12055 13.5 4.48831 12.6051 3.48161 11.2273L3.03915 10.6217L1.828 11.5066L2.27046 12.1122C3.54872 13.8617 5.62368 15 7.96452 15C11.8461 15 15 11.87 15 8C15 4.13001 11.8461 1 7.96452 1C5.06835 1 2.57851 2.74164 1.5 5.23347V3.75V3H0V3.75V7.25C0 7.66421 0.335786 8 0.75 8H3.75H4.5V6.5H3.75H2.63724C3.29365 4.19393 5.42843 2.5 7.96452 2.5ZM8.75 5.25V4.5H7.25V5.25V7.8662C7.25 8.20056 7.4171 8.51279 7.6953 8.69825L9.08397 9.62404L9.70801 10.0401L10.5401 8.79199L9.91603 8.37596L8.75 7.59861V5.25Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
          <div className="justify-self-end border border-dashed items-center max-w-[330px] w-fit flex shadow-sm bg-white rounded-lg p-3 gap-4">
            <div className="grid grow gap-1">
              <div className="flex justify-between text-muted-foreground"><p className="max-lg:hidden">vercel-site/<span className="text-primary">gigj178pv</span></p><p className="max-lg:text-xs">10m ago</p></div>
              <p className="flex justify-between items-center gap-4"><span className="text-xs items-end h-full flex">bx012mm</span><span>Fix ESLint error<span className="max-lg:hidden"> on query</span></span></p>
            </div>
            <div className="border-4 rounded-full size-9 grid place-items-center text-xs font-medium">55</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Scale = () => {
  return (
    <div className="grid col-span-2 place-items-center gap-4 p-12 border h-fit">
      <p className="text-xl lg:text-2xl text-center flex items-center gap-2 tracking-tight leading-snug font-semibold">
        Scale your
        <Button variant={'outline'} size={'lg'} className={`rounded-full tracking-normal`}>
        <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16"><path fillRule="evenodd" clipRule="evenodd" d="M2.5 2.25C2.5 1.83579 2.83579 1.5 3.25 1.5H6.75C7.16421 1.5 7.5 1.83579 7.5 2.25V7.5V14.5H2.5V2.25ZM7.5 16H1.75H1V15.25V2.25C1 1.00736 2.00736 0 3.25 0H6.75C7.99264 0 9 1.00736 9 2.25V6.5H12.25C13.4926 6.5 14.5 7.50736 14.5 8.75V15.25V16H13.75H9H8.25H7.5ZM9 14.5H13V8.75C13 8.33579 12.6642 8 12.25 8H9V14.5ZM4.75 3.5H4V5H4.75H5.25H6V3.5H5.25H4.75ZM4 6.5H4.75H5.25H6V8H5.25H4.75H4V6.5ZM10.75 9.5H10V11H10.75H11.25H12V9.5H11.25H10.75ZM4 9.5H4.75H5.25H6V11H5.25H4.75H4V9.5Z" fill="currentColor"></path></svg>
          Enterprise
        </Button>
        without compromising
        <Button variant={'outline'} size={'lg'} className={`rounded-full tracking-normal`}>
          <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16"><path fillRule="evenodd" clipRule="evenodd" d="M3.5 9.52717V4.057C3.69054 4.00405 3.8926 3.95131 4.10681 3.8954L4.10684 3.89539C4.25396 3.85699 4.40682 3.81709 4.5656 3.7746C5.15243 3.61758 5.79596 3.43066 6.38899 3.17017C6.97334 2.91351 7.55664 2.56529 8 2.05704C8.44336 2.56529 9.02666 2.91351 9.61101 3.17017C10.204 3.43066 10.8476 3.61758 11.4344 3.7746C11.5932 3.81709 11.746 3.85699 11.8932 3.89539C12.1074 3.9513 12.3094 4.00405 12.5 4.057V9.52717C12.5 10.9221 11.7257 12.2018 10.49 12.849L8 14.1533L5.50997 12.849C4.27429 12.2018 3.5 10.9221 3.5 9.52717ZM6.87802 1.06132C7.10537 0.796772 7.25 0.467199 7.25 0H8.75C8.75 0.467199 8.89463 0.796772 9.12198 1.06132C9.3643 1.34329 9.73045 1.58432 10.2142 1.79681C10.6962 2.00853 11.2465 2.17155 11.8221 2.32558C11.9557 2.36133 12.0926 2.39704 12.2305 2.43301L12.2307 2.43305C12.6631 2.54586 13.1054 2.66124 13.4872 2.78849L14 2.95943V3.5V9.52717C14 11.4801 12.916 13.2716 11.186 14.1778L8.34801 15.6644L8 15.8467L7.65199 15.6644L4.81396 14.1778C3.084 13.2716 2 11.4801 2 9.52717V3.5V2.95943L2.51283 2.78849C2.89458 2.66124 3.33687 2.54586 3.76932 2.43305L3.7694 2.43303C3.90732 2.39706 4.04424 2.36134 4.17787 2.32558C4.75351 2.17155 5.30375 2.00853 5.78576 1.79681C6.26955 1.58432 6.6357 1.34329 6.87802 1.06132ZM10.5303 7.53033L11.0607 7L10 5.93934L9.46967 6.46967L7 8.93934L6.53033 8.46967L6 7.93934L4.93934 9L5.46967 9.53033L6.46967 10.5303C6.76256 10.8232 7.23744 10.8232 7.53033 10.5303L10.5303 7.53033Z" fill="currentColor"></path></svg>
          Security
        </Button>
      </p>
    </div>
  )
}

