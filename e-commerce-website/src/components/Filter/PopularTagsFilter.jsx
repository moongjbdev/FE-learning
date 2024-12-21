/* eslint-disable react/prop-types */

const PopularTagsFilter = ({ tags, onSelectTag, selectedTags }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onSelectTag(tag)}
          className={`px-3 py-[6px] border rounded text-sm font-medium text-[#191C1F] ${
            selectedTags.includes(tag) ? 'border-[#FA8232] bg-[#FFF3EB] text-[#FA8232]' : 'border-[#E4E7E9]'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default PopularTagsFilter;