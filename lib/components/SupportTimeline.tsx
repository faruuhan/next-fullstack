import { Avatar } from "@nextui-org/react";

const SupportTimeline = () => {
  return (
    <>
      <div className='p-3 border-b border-zinc-800'>
        <div className='grid grid-cols-[auto_1fr_auto] grid-rows-[1fr_auto]'>
          <div className='row-span-2'>
            <Avatar size='md' title='asep' />
          </div>
          <div className='ml-4 flex gap-2'>
            <h6 className='font-semibold'>asepganteng</h6>
            <span className='font-normal'>sending gift</span>
            <span className='font-semibold text-zinc-500'>Rp 5.000</span>
          </div>
          <div className='ml-auto'>
            <span className='text-zinc-500'>2h</span>
          </div>
          <div className='col-span-2 ml-4 pt-2'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Architecto, cum ipsum, quasi ipsam ipsa doloribus voluptates tempora
            repellendus adipisci, consequuntur sed ab reiciendis doloremque
            quaerat? Voluptatem laboriosam vel optio temporibus.
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportTimeline;
