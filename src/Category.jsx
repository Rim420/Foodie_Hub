import { MdDensitySmall } from "react-icons/md";
import { MdFreeBreakfast } from "react-icons/md";
import { MdSoupKitchen } from "react-icons/md";
import { GiNoodles } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { FaHamburger } from "react-icons/fa";

 const Categories=[
    {
        id:1,
        name:"All",
        image:<MdDensitySmall className="w-[55px] h-[55px] text-orange-500"/>
    }, 
    {
        id:2,
        name:"breakfast",
        image:<MdFreeBreakfast className="w-[55px] h-[55px] text-orange-500" />
    },
    {
        id:3,
        name:"soups",
        image:<MdSoupKitchen className="w-[55px] h-[55px] text-orange-500"/>
    },
    {
        id:4,
        name:"pasta",
        image:<GiNoodles className="w-[55px] h-[55px] text-orange-500"/>
    },
    {
        id:5,
        name:"main course",
        image:<MdFoodBank className="w-[55px] h-[55px] text-orange-500"/>
    },
    {
        id:6,
        name:"pizza",
        image:<GiFullPizza className="w-[55px] h-[55px] text-orange-500"/>
    },
    {
        id:7,
        name:"burger",
        image:<FaHamburger className="w-[55px] h-[55px] text-orange-500"/>
    },
]

export default Categories;