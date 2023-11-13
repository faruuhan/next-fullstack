import { Avatar, Button, Chip } from "@nextui-org/react";

const ProfileHeader = () => {
  return (
    <>
      <div className='flex flex-col p-4'>
        <div className='flex justify-between items-center'>
          <div>
            <h4 className='font-bold text-xl'>n00b_</h4>
            <span className='text-zinc-500'>faruuhan</span>{" "}
            <Chip size='sm'>Coder</Chip>
          </div>
          <div>
            <Avatar size='lg' isBordered />
          </div>
        </div>
        <div className='mt-4'>Lorem ipsum dolor sit amet.</div>
        <div className='mt-4 flex items-center justify-between'>
          <span className='text-zinc-500'>1.8M Support</span>
          <div>
            <Button size='sm' color='primary' radius='lg'>
              Support
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
