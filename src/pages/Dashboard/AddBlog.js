import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addBlogData from "../../redux/thunk/blogs/addBlogData";
// import addBlogData from "../../redux/thunk/blogs/addBlogData";
// import addProductData from "../../redux/thunk/products/addProductData";

const AddBlog = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    console.log(" data", data);
    const product = {
      title: data.title,
      img: data.blogImage,
      category: data.category,
      author_title: data.author_name,
      author_img: data.image,
      author_td: data.data_year_month,
      author_time: data.time,
      // status: data.status === "true" ? true : false,
      // price: data.price,
      // keyFeature: [
      //   data.keyFeature1,
      //   data.keyFeature2,
      //   data.keyFeature3,
      //   data.keyFeature4,
      // ],
      // spec: [],
    };
    console.log("new Product",product);
    dispatch(addBlogData(product));
  };

  return (
    <div className='flex justify-center items-center h-full '>
      <form
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
        onSubmit={handleSubmit(submit)}
      >
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='model'>
          title
          </label>
          <input type='text' id='model' {...register("title")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'>
           Blog Image
          </label>
          <input type='text' name='image' id='image' {...register("blogImage")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='category'>
          category
          </label>
          <input type='text' name='category' id='category' {...register("category")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='a_name'>
          Author Name
          </label>
          <input type='text' id='a_name' {...register("author_name")} />
        </div>
      
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'>
            Image
          </label>
          <input type='text' name='image' id='image' {...register("image")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='month_year'>
            Date month year
          </label>
          <input type='text' name='month_year' id='month_year' {...register("data_year_month")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='time'>
            Time
          </label>
          <input type='text'  id='time' {...register("time")} />
        </div>

        {/* <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='brand'>
            Brand
          </label>
          <select name='brand' id='brand' {...register("brand")}>
            <option value='amd'>AMD</option>
            <option value='intel'>Intel</option>
          </select>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='price'>
            Image
          </label>
          <input type='text' name='price' id='price' {...register("price")} />
        </div> */}

        {/* <div className='flex flex-col w-full max-w-xs'>
          <h1 className='mb-3'>Availability</h1>
          <div className='flex gap-3'>
            <div>
              <input
                type='radio'
                id='available'
                value={true}
                {...register("status")}
              />
              <label className='ml-2 text-lg' htmlFor='available'>
                Available
              </label>
            </div>
            <div>
              <input
                type='radio'
                id='stockOut'
                name='status'
                value={false}
                {...register("status")}
              />
              <label className='ml-2 text-lg' htmlFor='stockOut'>
                Stock out
              </label>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full max-w-xs'></div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='keyFeature1'>
            Key Feature 1
          </label>
          <input
            type='text'
            name='keyFeature1'
            id='keyFeature1'
            {...register("keyFeature1")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='keyFeature2'>
            Key Feature 2
          </label>
          <input
            type='text'
            name='keyFeature2'
            id='keyFeature2'
            {...register("keyFeature2")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='keyFeature3'>
            Key Feature 3
          </label>
          <input
            type='text'
            name='keyFeature3'
            id='keyFeature3'
            {...register("keyFeature3")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='keyFeature4'>
            Key Feature 4
          </label>
          <input
            type='text'
            name='keyFeature4'
            id='keyFeature4'
            {...register("keyFeature4")}
          />
        </div> */}

        <div className='flex justify-between items-center w-full'>
          <button
            className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(AddBlog);
