import { Input, Checkbox, Button } from "@nextui-org/react";

const SignUp = () => {
  return (
    <>
      <div className='min-h-screen px-10 py-10'>
        <h5 className='text-center text-lg font-semibold mb-4'>Register</h5>
        <form action=''>
          <div className='flex flex-col gap-4'>
            <Input color='default' size='sm' type='text' label='Full Name' />
            <Input color='default' size='sm' type='email' label='Email' />
            <Input color='default' size='sm' type='text' label='Username' />
            <Input color='default' size='sm' type='password' label='Password' />
            <Input
              color='default'
              size='sm'
              type='password'
              label='Password Confirmation'
            />
          </div>
          <div className='mt-4'>
            <Checkbox>Agree to the terms & conditions</Checkbox>
          </div>
          <div className='mt-8 space-y-4'>
            <Button radius='sm' fullWidth color='primary'>
              Sign up
            </Button>
            <p className='text-center text-zinc-500'>Have an account?</p>
            <Button radius='sm' fullWidth color='default'>
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
