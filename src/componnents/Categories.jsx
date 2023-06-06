import { Carousel } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";


export default function CarouselCardExample() {
  return (
   
   <div >
    <h1 className="text-center p-8 font-Mono text-5xl font-bold leading-none sm:text-6xl">
      Deliciously Diverse: Unveiling the Flavors of <span className="text-[#C4DE39]"> Japan </span>
    </h1>
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-1 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-black w-8" : "bg-black/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 -translate-y-2/4 left-4 ml-60"
        >
          <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" color='black' />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 -translate-y-2/4 !right-4 mr-60"
        >
          <ArrowRightIcon strokeWidth={2} className="w-6 h-6" color="black"/>
        </IconButton>
      )}
    >
      
    
      <div className="flex flex-col justify-center items-center space-x-4 xs:flex-wrap lg:flex-row">

      <Card className="w-full max-w-[26rem] xs:w-auto shadow-lg border-2">
      <CardHeader floated={false} color="blue-gray">
        <img
          src="src/assets/CategoryRamen.png"
          alt="Ramen"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium font-Mono">
            Ramen
          </Typography>
        </div>
        <Typography color="gray" className='font-Noto'>
        Japanese ramen: Flavorful broth, chewy noodles, and tasty toppings create a comforting and beloved dish enjoyed worldwide.
        </Typography>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
        
        </div>
      </CardBody>
      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true} className="bg-[#C4DE39] hover:shadow-black-00">
        Explore Recipes
        </Button>
      </CardFooter>
    </Card>

    <Card className="w-full max-w-[26rem] xs:w-auto shadow-lg border-2">
      <CardHeader floated={false} color="blue-gray">
        <img
          src="src/assets/CategoryRamen.png"
          alt="Ramen"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium font-Mono">
            Ramen
          </Typography>
        </div>
        <Typography color="gray" className='font-Noto'>
        Japanese ramen: Flavorful broth, chewy noodles, and tasty toppings create a comforting and beloved dish enjoyed worldwide.
        </Typography>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
        
        </div>
      </CardBody>
      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true} className="bg-[#C4DE39] hover:shadow-black-100">
        Explore Recipes
        </Button>
      </CardFooter>
    </Card>

    <Card className="w-full max-w-[26rem] xs:w-auto shadow-lg border-2">
      <CardHeader floated={false} color="blue-gray">
        <img
          src="src/assets/CategoryRamen.png"
          alt="Ramen"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium font-Mono">
            Ramen
          </Typography>
        </div>
        <Typography color="gray" className='font-Noto'>
        Japanese ramen: Flavorful broth, chewy noodles, and tasty toppings create a comforting and beloved dish enjoyed worldwide.
        </Typography>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
        
        </div>
      </CardBody>
      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true} className="bg-[#C4DE39] hover:shadow-black-100">
        Explore Recipes
        </Button>
      </CardFooter>
    </Card>
      </div>

      <div className="flex justify-center items-center space-x-4 xs:flex-wrap">
      
      <Card className="w-full max-w-[26rem] xs:w-auto shadow-lg border-2">
      <CardHeader floated={false} color="blue-gray">
        <img
          src="src/assets/CategoryRamen.png"
          alt="Ramen"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium font-Mono">
            Ramen
          </Typography>
        </div>
        <Typography color="gray" className='font-Noto'>
        Japanese ramen: Flavorful broth, chewy noodles, and tasty toppings create a comforting and beloved dish enjoyed worldwide.
        </Typography>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
        
        </div>
      </CardBody>
      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true} className="bg-[#C4DE39] hover:shadow-black-100">
        Explore Recipes
        </Button>
      </CardFooter>
    </Card>

    <Card className="w-full max-w-[26rem] xs:w-auto shadow-lg border-2">
      <CardHeader floated={false} color="blue-gray">
        <img
          src="src/assets/CategoryRamen.png"
          alt="Ramen"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium font-Mono">
            Ramen
          </Typography>
        </div>
        <Typography color="gray" className='font-Noto'>
        Japanese ramen: Flavorful broth, chewy noodles, and tasty toppings create a comforting and beloved dish enjoyed worldwide.
        </Typography>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
        
        </div>
      </CardBody>
      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true} className="bg-[#C4DE39] hover:shadow-black-100">
        Explore Recipes
        </Button>
      </CardFooter>
    </Card>

    <Card className="w-full max-w-[26rem] xs:w-auto shadow-lg border-2">
      <CardHeader floated={false} color="blue-gray">
        <img
          src="src/assets/CategoryRamen.png"
          alt="Ramen"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium font-Mono">
            Ramen
          </Typography>
        </div>
        <Typography color="gray" className='font-Noto'>
        Japanese ramen: Flavorful broth, chewy noodles, and tasty toppings create a comforting and beloved dish enjoyed worldwide.
        </Typography>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
        
        </div>
      </CardBody>
      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true} className="bg-[#C4DE39] hover:shadow-black-100">
        Explore Recipes
        </Button>
      </CardFooter>
    </Card>
      </div>

      <div className="flex justify-center items-center space-x-4 xs:flex-wrap">
      
      <Card className="w-full max-w-[26rem] xs:w-auto shadow-lg border-2">
      <CardHeader floated={false} color="blue-gray">
        <img
          src="src/assets/CategoryRamen.png"
          alt="Ramen"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium font-Mono">
            Ramen
          </Typography>
        </div>
        <Typography color="gray" className='font-Noto'>
        Japanese ramen: Flavorful broth, chewy noodles, and tasty toppings create a comforting and beloved dish enjoyed worldwide.
        </Typography>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
        
        </div>
      </CardBody>
      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true} className="bg-[#C4DE39] hover:shadow-black-100">
        Explore Recipes
        </Button>
      </CardFooter>
    </Card>

    <Card className="w-full max-w-[26rem] xs:w-auto shadow-lg border-2">
      <CardHeader floated={false} color="blue-gray">
        <img
          src="src/assets/CategoryRamen.png"
          alt="Ramen"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium font-Mono">
            Ramen
          </Typography>
        </div>
        <Typography color="gray" className='font-Noto'>
        Japanese ramen: Flavorful broth, chewy noodles, and tasty toppings create a comforting and beloved dish enjoyed worldwide.
        </Typography>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
        
        </div>
      </CardBody>
      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true} className="bg-[#C4DE39] hover:shadow-black-100">
        Explore Recipes
        </Button>
      </CardFooter>
    </Card>

    <Card className="w-full max-w-[26rem] xs:w-auto shadow-lg border-2">
      <CardHeader floated={false} color="blue-gray">
        <img
          src="src/assets/CategoryRamen.png"
          alt="Ramen"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium font-Mono">
            Ramen
          </Typography>
        </div>
        <Typography color="gray" className='font-Noto'>
        Japanese ramen: Flavorful broth, chewy noodles, and tasty toppings create a comforting and beloved dish enjoyed worldwide.
        </Typography>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
        
        </div>
      </CardBody>
      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true} className="bg-[#C4DE39] hover:shadow-black-100">
        Explore Recipes
        </Button>
      </CardFooter>
    </Card>
      </div>
    </Carousel>
    </div>
  );
}