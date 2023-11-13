import { Button, Input, Checkbox } from "@nextui-org/react";

const SignIn = () => {
  return (
    <>
      <div className='min-h-screen px-10 py-10'>
        <h5 className='text-center text-lg font-semibold mb-4'>Sign in</h5>
        <form action=''>
          <div className='flex flex-col gap-4'>
            <Input color='default' size='sm' type='text' label='Username' />
            <Input color='default' size='sm' type='password' label='Password' />
          </div>
          <div className='mt-4'>
            <Checkbox>Remember me</Checkbox>
          </div>
          <div className='mt-8 space-y-4'>
            <Button radius='sm' fullWidth color='primary'>
              Sign in
            </Button>
            <p className='text-center text-zinc-500'>Don't have an account?</p>
            <Button radius='sm' fullWidth color='default'>
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
