/** @format */

import Img from '../../public/image'
import { Pertner } from '../../public'
import Svg from '../../public/svg'

const Programs = () => {
  return (
    <div className="flex flex-col gap-[15px] text-center">
      <div className="m-auto">
        <Pertner />
      </div>
      <h1 className=" text-2xl/[29px]">
        <b>Referral Partners & Programs</b>
      </h1>
      <p className="border-tsap-3 border-t-[5px] w-[47px] m-auto"></p>
      <p className=" text-lg/[30px]">
        TSAP Private Wealth welcomes referral partners to grow together and
        maximise service offering to clients.
      </p>
      <div className="flex justify-center flex-wrap">
        <Svg.Aura />
        <Svg.Lbs />
        <Svg.Fin />
      </div>
    </div>
  )
}

const Community = () => {
  return (
    <div className="flex flex-col gap-[15px] text-center">
      <div className="m-auto">
        <Svg.Parter3 />
      </div>
      <h1 className=" text-2xl/[29px]">
        <b>Community</b>
      </h1>
      <p className="border-tsap-3 border-t-[5px] w-[47px] m-auto"></p>
      <p className=" text-lg/[30px]">
        Partners, Advisers & Associates of TSAP Private Wealth believe that life
        is not simply about numbers, figures and percentage gains. There is more
        to life; accordingly TSAP Advisers participate in various Community
        Activities to support others within our local area. We are open to the
        engagement of Local Councils, Community Groups or Charitable
        Organisations to further understand how we may support or donate to
        these organisations.
      </p>
    </div>
  )
}

const CareerPaths = () => {
  return (
    <div className="flex flex-col gap-[15px] text-center">
      <div className="m-auto">
        <Svg.Parter2 />
      </div>
      <h1 className=" text-2xl/[29px]">
        <b>Career Paths</b>
      </h1>
      <p className="border-tsap-3 border-t-[5px] w-[47px] m-auto"></p>
      <p className=" text-lg/[30px]">
        TSAP Private Wealth believe great employees are not replaceable.
        Education is fundamental to provide professional advice first-hand
        experience through careful mentoring is invaluable. TSAP have designed
        an Associate Program involving support for relevant
        education/qualifications, ongoing training, ongoing mentoring, client
        leads or management leadership skills. TSAP Private Wealth provides a
        designated position for our Associates’ level of training, experience
        and desired career path.
      </p>
      <div className=" leading-[30px]">
        <p className="text-lg font-bold">
          TSAP’s career progression are in the following stages:
        </p>
        <p>
          1. Associate (Intern) – flexible hours while completing university or
          post graduate studies
        </p>
        <p>
          2. Associate (Graduate Program) – 1st year, full time, rotation
          program with various business units/partners/firms
        </p>
        <p>
          3. Associate – 2nd year, full time, dedicated to a Partner of the
          firm, support for industry relevant education/qualifications, direct
          client management and revenue sharing/bonuses
        </p>
        <p>
          4. Senior Associate / Associate Adviser – 3rd year, dependent on
          incumbent’s goals & career aspirations, client book and revenue
          sharing/bonuses
        </p>
        <p>
          5. Manager / Adviser – 4th year, dependent on incumbent’s goals career
          & aspirations, client referral agreement and revenue sharing/bonuses
        </p>
      </div>
    </div>
  )
}

export const WhatDoClientThinks = [
  {
    name: 'Partners',
    img: <Pertner />,
    contentModal: <Programs />,
    review:
      'TSAP welcomes referral partners to grow together and maximise service offering to clients.',
  },
  {
    name: 'Career Paths',
    img: <Svg.Parter2 />,
    contentModal: <CareerPaths />,
    review:
      'TSAP welcomes new people at various levels of experience. A specific Career Path and Graduate Program is offered to our Associates.',
  },
  {
    name: 'Community',
    img: <Svg.Parter3 />,
    contentModal: <Community />,
    review:
      'TSAP values giving back to the community and has various programs in place. We welcome enquiries for potential new engagements.',
  },
]

export const AVARTAS = [
  {
    img: Img.Avatar4,
    name: 'Nigel Tsa',
    role: 'MAppFin(Corp Fin) B.Ec(Fin & Fin Ec) Adv.Dip.FS(FP) <br/>Senior Adviser',
    content: `Nigel is a Senior Adviser of TSAP Private Wealth and brings over 20 years’ experience in the financial services industry, which commenced in 2002. Nigel specialises in providing investment and financial planning advice for variety of clients including pre/retirees, business owners and corporates.
<br />
<br />
From 2002 to 2012, Nigel held Advisory positions at ANZ Banking Group, Westpac Banking Corporation, Citibank and a boutique private client stock broking firm. Drawing from these experiences he felt better service could be provided to clients over the long term. This led to Nigel being a founding partner of TK Advisers & Associates which rebranded to TSAP Private Wealth in mid-2024.
<br />
<br />
Nigel is a current Financial Planner AFP® member of the FPA. He holds a Master of Applied Finance, majoring in Corporate Finance/Advisory and Wealth Management; as well as a Bachelor of Economics, majoring in Finance and Financial Economics from the University of New South Wales. Nigel completed both a Diploma and Advanced Diploma of Financial Services (Financial Planning).`,
  },
  {
    img: Img.Avatar6,
    name: 'Sunil Srivatsan',
    role: ' B.Com(Mgmt) <br/>Senior Relationship Manager',
    content: `
Sunil is a Senior Relationship Manager at TSAP Private Wealth. He is entrusted with building
and nurturing deep client relationships and delivering professional private wealth service to our
clients. Sunil is a key member of the firm, mentoring and guiding our Associates. Sunil has
previously worked in various roles ranging from Client Service, Business Analysis, Account
Management and Team Management for large Financial Services institutions such as ING and
Perpetual.
<br />
<br />
Sunil’s strong work ethic has been recognised in the form of many internal awards and
promotions that he has won at these organisations. Sunil holds a Bachelor of Commerce
degree, majoring in Management.`,
  },
  {
    img: Img.Avatar5,
    name: 'Edmund Wong',
    role: 'BCompSC <br/>Senior IT Adviser',
    content: `With a career that began in software development, Edmund has evolved into a seasoned IT consultant with expertise in business analysis and project management. Starting as a developer, Edmund gained deep technical knowledge by building custom software solutions and working across various technologies. This technical foundation allows them to deliver robust, scalable IT solutions that address complex business needs.
<br />
<br />
After transitioning into a business analyst role, Edmund became adept at bridging the gap between technical teams and business stakeholders. By translating business requirements into actionable IT strategies, they helped organizations streamline processes and improve efficiency. Now, as a project management consultant, Edmund leads cross-functional teams to successfully deliver IT projects using methodologies and risk management.
<br />
<br />
Edmund holds a BA in Computer Science. With their unique blend of technical and strategic expertise, Edmund provides end-to-end consulting services that support both immediate project goals and long-term business objectives.`,
  },

  {
    img: Img.Avatar8,
    name: 'Patrick Buan',
    role: 'B.A. Psych <br/> Senior Associate',
    content: `Patrick is a Senior Associate at TSAP Private Wealth. He has been working in the financial
sector for more than 5 years, he combines his psychological insights with financial expertise to
offer clients personalised and empathetic guidance. His academic background has equipped
him with strong analytical skills and a unique perspective on how emotions and psychology
influence financial choices.
<br/>
<br/>
He is dedicated to ensuring that the administrative functions of financial services are executed
with precision and care, aligning with both the clients&#39; and the organization’s goals. His
approach is detail-oriented and client-focused, ensuring that every aspect of administration
supports a seamless and effective financial service experience.`,
  },
  {
    img: Img.Avatar7,
    name: 'Janice Obenza',
    role: 'B.S. Accty <br/> Senior Associate',
    content: `Janice is a Senior Associate at TSAP Private Wealth based in the Philippines with a
Degree in Accounting. In her current role, she excels in administration, focusing on
liaising with clients, insurers, and fund managers on various financial planning matters.
Her expertise in financial management enables her to effectively navigate complex
financial landscapes, ensuring clients receive tailored solutions that meet their unique
needs.
<br/>
<br/>
With a commitment to providing exceptional service, Janice is passionate about helping
clients achieve their financial goals through informed decision-making and strategic
planning. She continuously seeks to expand her knowledge in the finance industry,
staying up-to-date with the latest trends and regulatory changes.`,
  },
]

export const AVARTAS2 = [
  AVARTAS[0],
  AVARTAS[0],
  AVARTAS[1],
  AVARTAS[2],
  AVARTAS[3],
  AVARTAS[4],
]

const Content = ({ content }: { content: string }) => {
  return (
    <div className="bg-[#F1F5F8] text-lg/[30px] max-tablet:text-base/[28px] max-mobile:text-[13px]/[24px] p-[80px] content-modal">
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </div>
  )
}

export const TABS = [
  {
    label: 'Financial Advice',
    name: 'financial',
    render: () => {
      return (
        <Content
          content="<b> Financial Planning </b> <br />
      We help individuals and corporations meet their long-term financial
      objectives by analysing their status and setting a plan to achieve those
      goals. We specialise in tax planning, asset allocation, risk management
      and retirement planning. We focus on strategy first and foremost, simplify
      the process and ensure what you have organically grown over time will
      continue to be nurtured now and well into the future.
      <br /> <br /> <b>Superannuation Services </b>
      <br />
      Superannuation is a tax vehicle which can be maximised through sound
      on-going advice and optimisation. Structuring and investment outcomes
      could have a major impact on exactly when you are able to retire and on
      your lifestyle in retirement. We work with all major superannuation
      providers, including retail, industry and SMSFs to meet client needs and
      goals.
      <br /> <br />
      <b>Retirement Planning </b>
      <br />
      Retirement planning is all about understanding your lifestyle and
      financial goals, then developing plans and taking action that is focused
      on achieving those goals. We can help you achieve the lifestyle that you
      seek in retirement by providing practical advice, reduce the impact of
      inflation, generate competitive tax-effective returns and create an
      appropriate income stream to enjoy retirement. Our advice optimises your
      assets, capital and income streams. <br />
      <br />
      <b>Tax Strategies </b>
      <br />
      Structuring and management of taxation issues can have a significant
      impact on financial outcomes. We will always look first to work with your
      existing tax advisers to ensure optimum structures and tax benefits in
      your financial circumstances."
        />
      )
    },
  },
  {
    label: 'Investments',
    name: 'investments',
    render: () => {
      return (
        <Content
          content="<b>Portfolio Management</b> <br />
      TSAP takes a holistic approach in understanding your overall assets,
      investment preference and risk profile. Fixed assets (direct property) and
      liquid assets (equities, bonds, term deposits and cash) are both
      important. These are taken into account and balanced towards your risk
      profile. We actively advise to de-risk your portfolio or take
      opportunistic tactical positions, while keeping in line with your
      fundamental investment preference and carefully monitoring the market.
      <br /> <br /><b>Asset Allocation</b> <br />
      Before any investment advice is provided, we will invest time into your
      risk profile and together establish a benchmark/strategic assets
      allocation. It is a foundation which our client and we will discuss,
      explain, understand and agree upon. Once agreed upon we will advise and
      guide our client’s asset mix toward their desired benchmark while daily
      monitoring market prices, maximising tax efficiencies and our client’s
      investment time-frame or stage of life.<br />
      <br /> <b>Direct Equities</b> <br />
      On a daily basis we monitor the events from our global counterparties (US,
      UK, Japan, China & economies of the EU). TSAP consider the impact these
      economies will have on our local economy, shares and individual client
      portfolios. We also take into account any corporations, capital raising,
      share purchase plans, rights issues or IPOs that are on offer for our
      individual client holdings. Our Advisers will then individually contact
      each client depending on their circumstances, stage of life and equity
      holdings to provide active advice to maximise their equity holdings with
      minimum risk.<br />
      <br /> <b>Corporate Bonds</b> <br />
      We research, review and consider each Corporate Bond presented to our
      firm. Following this We assist our clients’ to understand their
      investment, maximise their overall return with calculated minimal risk.
      There are a variety of corporate bonds traded on ASX. Corporate bonds can
      vary quite markedly and therefore it is important that you read the
      prospectus or term sheet for an individual bond to understand its terms.
      We assess the creditworthiness of the issuer of the bond as that too can
      vary markedly between issuers. As a general rule, safer bonds with a
      better credit standing promise lower yields to maturity than other
      corporate bonds with similar maturities. ‘Junk bonds’, also known as ‘high
      yield bonds’, are speculative-grade bonds which typically will have a low
      credit standing and therefore promise higher yields to maturity than other
      corporate bonds with similar maturities. The important rule to remember is
      the higher the bond issuer’s perceived credit risk, the higher the bond’s
      yield needs to be to compensate you for that risk. Cash Management<br />
      <br /> <b>Cash Management</b> <br />
      Capital protection and preservation of wealth is important to many
      Australians especially following the Global Financial Crisis. Accordingly
      TSAP assist our clients by ensuring their portfolios and assets have
      sufficient liquidity and flexibility to navigate through market
      volatility. Through careful monitoring of client payment and income needs,
      we provide superior control and confidence to clients’ cashflow while they
      enjoy attractive cash returns. Managed Funds<br />
      <br /> <b> Managed Funds</b> <br />
      We regularly review, attend meetings and updates with various professional
      fund managers to ensure clients’ monies are invested with the highest
      quality assets managers. Managed funds pool the money of individual
      investors. The combined capital is invested by a professional fund
      manager, in some cases being applied across a range of asset classes such
      as shares, bonds, property and infrastructure assets. Managed funds are
      popular with investors as they make it easy to invest. One transaction can
      provide access to a range of underlying investments and to diversify your
      investment across different asset classes and market sectors. They also
      provide access to investments that may otherwise be out of reach."
        />
      )
    },
  },
  {
    label: 'Risk Management',
    name: 'risk',
    render: () => {
      return (
        <Content
          content="<b>Secure Your Future</b> <br />
      Sound financial planning includes establishing ways of protecting against
      unforeseen circumstances that might arise on life’s journey. We can help
      you develop a risk management plan to do just that.
      <br />
        <br />
      <b>Achieve Your Goals</b> <br />
       Central to managing risk in your financial plans is protecting you
      and your family’s assets to help ensure that your goals can be achieved
      regardless of what life might throw at you.
      <br />
        <br />
      <b>Customized Insurance</b> <br />
      Whether it’s life; trauma; total & permanent disability; or income
      protection, TSAP will assist with a comprehensive needs and risk analysis
      to help you carefully select what type and level of cover best suits your
      circumstances and goals. We also provide advice in protecting the people
      in your businesses through Business Expenses and Key Man Risk Cover.
      <br />
        <br />
      <b>Wide Product Range</b> <br />
      As we are not aligned with any financial institution that you have access
      to a range of products from the leading providers rather than being
      limited to a particular corporate or institutional offering."
        />
      )
    },
  },
]
