import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    IconButton,
  } from "@material-tailwind/react";
  import {
    ClockIcon,
    LockOpenIcon,
    HeartIcon,
    HandRaisedIcon,
    FireIcon,
  } from "@heroicons/react/24/solid";

  import ClickRamen from '../assets/ClickRamen.png'
   
  export default function Example() {
    return (
      <div className="fixed mt-20 inset-0 flex items-center justify-center z-10"
      >
      <div className="w-full max-w-[40rem]">
      <Card className="w-full justify-center m-auto max-w-[40rem] shadow-lg bg-white border-4 border-black">
        <CardHeader floated={false} color="blue-gray">
          <img
            src={ClickRamen}
            alt="ui/ux review check"
          />
          <div className="absolute inset-0 h-full w-full " />
          <IconButton
            size="sm"
            color="red"
            variant="text"
            className="!absolute top-4 right-4 rounded-full"
          >
            <HeartIcon className="h-6 w-6" />
          </IconButton>
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="black" className="font-medium font-Mono">
            Tonkotsu ramen
            </Typography>
          </div>
          <Typography color="black" className='font-Noto'>
          Tonkotsu ramen is a classic Japanese dish featuring a luscious, creamy broth derived from simmered pork bones. With thin noodles, tender chashu pork, and delightful toppings like marinated bamboo shoots, it's a flavor-packed bowl of comfort.
          </Typography>
          <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
            <Tooltip content="1h">
            <span className=" rounded-full border border-black bg-[#C4DE39] bg-opacity-40 npm p-3 text-black transition-colors hover:border-[#C4DE39] hover:bg-[#C4DE39] hover:!opacity-100 group-hover:opacity-70">
                <ClockIcon className="h-5 w-5" />
              </span>
            </Tooltip>
            
            <Tooltip content="Medium Difficulty">
            <span className=" rounded-full border border-black bg-[#C4DE39] bg-opacity-40  p-3 text-black transition-colors hover:border-[#C4DE39] hover:bg-[#C4DE39] hover:!opacity-100 group-hover:opacity-70">
                <LockOpenIcon className="h-5 w-5" />
              </span>
            </Tooltip>
            <Tooltip content={`Dairy Free`}>
            <span className=" rounded-full border border-black bg-[#C4DE39] bg-opacity-40  p-3 text-black transition-colors hover:border-[#C4DE39] hover:bg-[#C4DE39] hover:!opacity-100 group-hover:opacity-70">
                <HandRaisedIcon className="h-5 w-5" />
              </span>
            </Tooltip>
            <Tooltip content="479 caloreis">
              <span className=" rounded-full border border-black bg-[#C4DE39] bg-opacity-40 p-3 text-black transition-colors hover:border-[#C4DE39] hover:bg-[#C4DE39] hover:!opacity-100 group-hover:opacity-70">
                <FireIcon className="h-5 w-5" />
              </span>
            </Tooltip>
          </div>
        </CardBody>
        <CardFooter className="pt-3">
        <div className="flex justify-left">
            <a rel="noopener noreferrer" href="#" className="inline-block">
                <a href="#_" class="relative inline-block text-lg group">
                <span class="font-Noto relative z-10 block px-5 py-3 overflow-hidden font-bold leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black">
                    <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#C4DE39] group-hover:-rotate-180 ease"></span>
                    <span class="relative">Start Cooking</span>
                </span>
                <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
            </a>
        </div>

        </CardFooter>
      </Card>
      </div>
      </div>
    );
  }