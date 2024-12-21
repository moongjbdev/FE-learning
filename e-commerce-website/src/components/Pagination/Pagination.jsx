/* eslint-disable react/prop-types */
import Right from "../../assets/Pagination/Right.svg";
import Left from "../../assets/Pagination/Left.svg";
import ArrowRight from "../../assets/Pagination/ArrowRight.svg";
import ArrowLeft from "../../assets/Pagination/ArrowLeft.svg";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 5;
  const currentGroup = Math.floor((currentPage - 1) / maxPagesToShow);

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const startPage = currentGroup * maxPagesToShow + 1;
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`min-w-[40px] h-10 mx-2 p-2 rounded-full text-[#191C1F] font-sm font-semibold ${i === currentPage ? 'bg-[#FA8232] text-white' 
          : 'bg-white border border-[#E4E7E9]' }`}
        >
          {i}
        </button>
      );
    }

    // Add ellipsis if there are more pages
    if (endPage < totalPages) {
      pageNumbers.push(
        <span key="ellipsis" className="mx-2 text-[#191C1F]">
          ...
        </span>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="h-40">
      <div className="flex justify-center">
        <button
          onClick={() => handleClick(1)}
          className="w-10 h-10 border-[2px] border-[#FA8232] p-2 rounded-full mr-3"
          disabled={currentPage === 1}
        >
          <div className="flex items-center">
            <img src={Left} alt="go-first" />
            <img src={Left} alt="go-first" />
          </div>
        </button>
        <button
          onClick={() => handleClick(currentPage - 1)}
          className="w-10 h-10 border-[2px] border-[#FA8232] p-2 rounded-full mr-5"
          disabled={currentPage === 1}
        >
          <img src={ArrowLeft} alt="back" />
        </button>
        <div className="flex items-center">
          {renderPageNumbers()}
        </div>
        <button
          onClick={() => handleClick(currentPage + 1)}
          className="w-10 h-10 border-[2px] border-[#FA8232] p-2 rounded-full ml-5"
          disabled={currentPage === totalPages}
        >
          <img src={ArrowRight} alt="back" />
        </button>
        <button
          onClick={() => handleClick(totalPages)}
          className="w-10 h-10 border-[2px] border-[#FA8232] p-2 rounded-full ml-3"
          disabled={currentPage === totalPages}
        >
          <div className="flex items-center">
            <img src={Right} alt="go-first" />
            <img src={Right} alt="go-first" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Pagination;