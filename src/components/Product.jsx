import React, { useEffect, useState } from "react";

function Product({ showCategory }) {
  console.log(showCategory);

  const [screen, setScreen] = useState(false);
  useEffect(() => {
    const screenResizing = () => {
      if (window.innerWidth < 500) {
        setScreen(true);
      } else {
        setScreen(false);
      }
    };

    window.addEventListener("resize", screenResizing);

    return () => {
      window.removeEventListener("resize", screenResizing);
    };
  }, []);

  return (
    <div
      className={`  bg-slate-400 mt-[10.1rem]
 ${showCategory ? "w-full " : "w-full"} `}
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores qui
      explicabo necessitatibus dolor deleniti! Nesciunt porro quidem cumque
      corporis at earum rerum voluptas voluptate dicta id nemo, reiciendis unde
      quia? Ab molestias accusamus nostrum, eius corporis perferendis debitis
      adipisci voluptatem totam fugiat odit consequuntur pariatur distinctio
      aperiam quam a itaque odio commodi alias optio modi delectus obcaecati.
      Necessitatibus, eaque reiciendis. Asperiores doloribus quod quasi nisi
      unde expedita debitis quaerat voluptates in, ab, dignissimos laborum
      voluptas aperiam et, adipisci modi suscipit delectus veritatis accusamus
      magnam. Quia dolorum quisquam dolor voluptatum molestiae! Reiciendis rerum
      provident accusantium atque optio, quidem soluta deserunt veritatis quod
      modi tenetur enim fugiat eius labore animi odit rem, voluptate doloribus
      delectus. Dolor dicta perferendis praesentium cum libero ex! Sunt
      perferendis natus beatae quo molestiae enim commodi illo sequi ex nihil
      delectus numquam rem, consectetur excepturi soluta laboriosam ab eos,
      aspernatur in quod laborum? Sunt ab reiciendis eos ea! Commodi perferendis
      sint deserunt consequuntur, possimus eius deleniti. Dolore, nesciunt
      mollitia consequuntur, accusamus eos facilis unde est ipsa omnis molestias
      animi esse saepe aspernatur recusandae earum cum provident labore
      doloribus? Temporibus dicta hic quasi commodi, soluta voluptas ab
      blanditiis fugiat iste aspernatur sed corporis voluptates ea magnam,
      ratione unde eveniet expedita. Aut vitae sequi soluta tempore quo, nulla
      amet cupiditate. Nihil blanditiis, commodi inventore quibusdam autem animi
      accusamus, asperiores quis atque sed ad laboriosam. Adipisci est maxime
      sint voluptates quisquam mollitia vel, asperiores ex alias, suscipit
      magnam necessitatibus quam dolor! Vel, assumenda. Id ad nam recusandae
      nisi soluta labore voluptatum! Debitis ducimus officia enim cum recusandae
      iure quia unde veniam? Sequi ab ducimus incidunt autem voluptatibus
      dolores at officia sapiente? Ex, suscipit! Accusamus accusantium illo
      quidem labore, numquam fugit praesentium corrupti perspiciatis itaque
      reprehenderit quas reiciendis quaerat, laudantium, quia inventore nihil
      molestias magnam ducimus consectetur quos. Molestias accusantium excepturi
      beatae.
    </div>
  );
}

export default Product;
