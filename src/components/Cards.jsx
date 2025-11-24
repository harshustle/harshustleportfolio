import Stack from './Stack'
import { automationImages, webDesignImages, videoEditingImages } from '../data/cards'

function Cards() {
  const cardCategories = [
    {
      title: "Automation",
      images: automationImages,
    },
    {
      title: "Web Design",
      images: webDesignImages,
    },
    {
      title: "Video Editing",
      images: videoEditingImages,
    },
  ];

  return (
    <div className="space-y-8 flex flex-col-3 mx-auto gap-28">
    {cardCategories.map((category) => (
      <section key={category.title}>
        <h2 className="text-lg text-[#D4A5FF] text-center font-semibold mb-4">{category.title}</h2>
        <Stack
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={{ width: 300, height: 400 }}
          cardsData={category.images}
        />
      </section>
    ))
  }
    </div >
  );
}

export default Cards;