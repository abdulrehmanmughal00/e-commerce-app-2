"use client";

import { useState } from "react";
import Styles from "./Sidebar.module.css";
import { FiPlus, FiMinus, FiChevronDown, FiX } from "react-icons/fi";

interface SidebarProps {
  sort: string;
  onSortChange: (value: string) => void;

  filters: {
    sizes: string[];
    categories: string[];
    minPrice: string;
    maxPrice: string;
  };

  setFilters: React.Dispatch<
    React.SetStateAction<{
      sizes: string[];
      categories: string[];
      minPrice: string;
      maxPrice: string;
    }>
  >;

  onClose?: () => void;
}


const Sidebar = ({
  sort,
  onSortChange,
  filters,
  setFilters,
  onClose,
}: SidebarProps) => {


const [availability,setAvailability]=useState(false);
const [price,setPrice]=useState(false);
const [productType,setProductType]=useState(false);
const [size,setSize]=useState(false);



const handleSize=(value:string)=>{

setFilters(prev=>({
...prev,

sizes:prev.sizes.includes(value)

?prev.sizes.filter(item=>item!==value)

:[...prev.sizes,value]

}));

}



const handleCategory=(value:string)=>{

setFilters(prev=>({

...prev,

categories:prev.categories.includes(value)

?prev.categories.filter(item=>item!==value)

:[...prev.categories,value]

}));

}



return (

<aside className={Styles.sidebar}>


<div className={Styles.mobileHeader}>

<h3>FILTER AND SORT</h3>

<button
className={Styles.closeBtn}
onClick={()=>onClose?.()}
>

<FiX/>

</button>

</div>





{/* SORT */}

<div className={Styles.sortSection}>

<label className={Styles.sortLabel}>
SORT BY
</label>


<div className={Styles.selectWrap}>

<select
value={sort}
onChange={(e)=>onSortChange(e.target.value)}
>

<option>Featured</option>
<option>Newest</option>
<option>Price Low → High</option>
<option>Price High → Low</option>

</select>


<FiChevronDown/>

</div>

</div>






{/* AVAILABILITY */}

<div className={Styles.section}>


<button
className={Styles.header}
onClick={()=>setAvailability(!availability)}
>

<span>AVAILABILITY</span>

{
availability?
<FiMinus/>:
<FiPlus/>
}

</button>



{
availability &&

<div className={Styles.content}>

<label className={Styles.checkbox}>

<input type="checkbox"/>

<span>In Stock</span>

</label>


<label className={Styles.checkbox}>

<input type="checkbox"/>

<span>Out Of Stock</span>

</label>


</div>

}


</div>







{/* PRICE */}

<div className={Styles.section}>


<button
className={Styles.header}
onClick={()=>setPrice(!price)}
>


<span>PRICE</span>


{
price?
<FiMinus/>:
<FiPlus/>
}


</button>



{
price &&

<div className={Styles.content}>


<p>
Price Range
</p>


<div className={Styles.priceInputs}>


<input

type="number"

placeholder="Rs From"

value={filters.minPrice}

onChange={(e)=>

setFilters(prev=>({

...prev,

minPrice:e.target.value

}))

}

/>



<input

type="number"

placeholder="Rs To"

value={filters.maxPrice}

onChange={(e)=>

setFilters(prev=>({

...prev,

maxPrice:e.target.value

}))

}

/>


</div>



</div>

}



</div>









{/* PRODUCT TYPE */}


<div className={Styles.section}>


<button

className={Styles.header}

onClick={()=>setProductType(!productType)}

>


<span>
PRODUCT TYPE
</span>


{
productType?
<FiMinus/>:
<FiPlus/>
}


</button>




{

productType &&


<div className={Styles.content}>


{
[
["T-Shirt","t-shirts"],
["Polo","polos"],
["Trouser","trousers"]

].map(([name,value])=>(


<label
key={value}
className={Styles.checkbox}
>


<input

type="checkbox"

checked={filters.categories.includes(value)}

onChange={()=>handleCategory(value)}

/>


<span>{name}</span>


</label>


))


}


</div>


}


</div>









{/* SIZE */}


<div className={Styles.section}>


<button

className={Styles.header}

onClick={()=>setSize(!size)}

>


<span>
SIZE
</span>


{
size?
<FiMinus/>:
<FiPlus/>
}


</button>





{

size &&


<div className={Styles.content}>


{

[
"S",
"M",
"L",
"XL",
"30",
"32",
"34",
"36"

].map(item=>(


<label

key={item}

className={Styles.checkbox}

>


<input

type="checkbox"

checked={filters.sizes.includes(item)}

onChange={()=>handleSize(item)}

/>


<span>
{item}
</span>


</label>


))


}



</div>


}



</div>





</aside>

)

}


export default Sidebar;