import SingleBlog from "./SingleBlog";

const AllBlogs = () => {
  let blogPost = [
    {
      _id: "1224",
      period: "October 16, 2023",
      blogThumbnail:
        "/assets/BlogImage/25d6ad1001f746b19633bd34c070fb89d697ae32.jpg",
      blogTitle: "White Drawer unit",
      blogDescription: "7 ways to decor your home like a professional",
    },
    {
      _id: "1225",
      period: "October 16, 2024",
      blogThumbnail:
        "/assets/BlogImage/37bf9528c298a77d7584401e250c61f453fed9be.jpg",
      blogTitle: "White Drawer unit",
      blogDescription: "Inside a beautiful kitchen organization",
    },
    {
      _id: "1226",
      period: "June 17, 2025",
      blogThumbnail:
        "/assets/BlogImage/82f83dfd5a12911fed9d5a4917e973ec9a95c79f.jpg",
      blogTitle: "White Drawer unit",
      blogDescription: "Decor your bedroom for your children",
    },
    {
      _id: "1226",
      period: "June 17, 2025",
      blogThumbnail:
        "/assets/BlogImage/92ea3616d8352134b62d96ace4c60d66b07a8736.jpg",
      blogTitle: "White Drawer unit",
      blogDescription:
        "Modern texas home is beautiful and completely kid-friendly",
    },
    {
      _id: "1225",
      period: "June 17, 2025",
      blogThumbnail:
        "/assets/BlogImage/c186632f05e25d33e7c01e207fe2c1296c7fa050.jpg",
      blogTitle: "White Drawer unit",
      blogDescription:
        "Modern texas home is beautiful and completely kid-friendly",
    },
    {
      _id: "1225",
      period: "June 17, 2025",
      blogThumbnail:
        "/assets/BlogImage/c3fbbab4923f0bc003f58e58364fbe76ce0d0465.jpg",
      blogTitle: "White Drawer unit",
      blogDescription:
        "Modern texas home is beautiful and completely kid-friendly",
    },
    {
      _id: "1225",
      period: "October 16, 20243",
      blogThumbnail:
        "/assets/BlogImage/c90986d85815d30f3716d751834b3f20ab1715cf.jpg",
      blogTitle: "White Drawer unit",
      blogDescription:
        "Modern texas home is beautiful and completely kid-friendly",
    },
    {
      _id: "1225",
      period: "June 17, 2025",
      blogThumbnail:
        "/assets/BlogImage/e685039df52033b8a13f6f9fb9b88103145e077e.jpg",
      blogTitle: "White Drawer unit",
      blogDescription:
        "Modern texas home is beautiful and completely kid-friendly",
    },
    {
      _id: "1225",
      period: "June 17, 2025",
      blogThumbnail:
        "/assets/BlogImage/eb7ebb42e593ed398ce0d66312bc26e866b96247.jpg",
      blogTitle: "White Drawer unit",
      blogDescription:
        "Modern texas home is beautiful and completely kid-friendly",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-stretch justify-center  md:gap-3 gap-1 overflow-hidden py-3 ">
      {blogPost.map((items, index) => (
        <div
          key={index}
          className=" rounded-t-md overflow-hidden max-w-[357px]"
        >
          <SingleBlog items={items} />
        </div>
      ))}
    </div>
  );
};

export default AllBlogs;
