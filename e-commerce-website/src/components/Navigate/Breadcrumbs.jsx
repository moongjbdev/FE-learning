import House from "../../assets/Breadcrumbs/House.svg";
import CaretRight from "../../assets/Breadcrumbs/CaretRight.svg";


const Breadcrumbs = () => {
  const url = "/home/user/settings";
  let currentLink = '';

  const crumbs = url.split("/")
    .filter(crumb => crumb !== '')
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;
      const isLast = index === array.length - 1;
      return (
        <div key={index} className="inline-flex items-center">
          <a
            href={currentLink}
            className={`hover:text-[#FA8232] ${isLast ? 'text-[#2DA5F3]' : 'text-[#5F6C72]'}`}
          >
            <span className='capitalize'>{crumb}</span>
          </a>
          {!isLast && (
            <img src={CaretRight} alt="Caret Right" className="w-4 h-4 mx-2" />
          )}
        </div>
      );
    });

  return (
    <div className='w-full h-[72px] bg-[#F2F4F5]'>
      <div className='max-w-main m-auto h-full flex items-center'>
        <a href="/home">
          <img src={House} alt="Home" className="mr-2" />
        </a>
        {crumbs}
      </div>
    </div>
  );
}

export default Breadcrumbs;