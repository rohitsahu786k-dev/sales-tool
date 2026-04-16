
import IconsWheel from '../IconsWheel/IconsWheel';

function MenuItems({ pages, handleActive, active, disableAllMenu }) {
  console.log(pages)
  return (
    <>
      <div key={pages.page + "menu"} className="menu-button"></div>
      {
        // images.map(({page, name, deg, image}, index) => (
        <IconsWheel key={pages.page}
          page={pages.page}
          image={pages.image}
          name={pages.name}
          active={active}
          rotation={(360 / pages.pLength) * pages.page}
          transitionDelay={1 * 75}
          x={pages.deg}
          handleActive={handleActive}
          disabled={(disableAllMenu ? (pages.page == 0 ? false : true) : pages.disable)}
        />
        
        // ))
      }
    </>
  )
}
export default MenuItems;