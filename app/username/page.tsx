"use client";
import { Avatar, Tab, Tabs, Button, Chip } from "@nextui-org/react";
import ProfileHeader from "@/lib/components/ProfileHeader";
import SupportTimeline from "@/lib/components/SupportTimeline";
import PostTimeline from "@/lib/components/PostTimeline";

const Profile = () => {
  return (
    <>
      <div className='min-h-screen'>
        <ProfileHeader />
        <div className='w-full flex flex-col'>
          <Tabs
            variant='underlined'
            aria-label='Tabs variants'
            classNames={{
              tabList:
                "gap-6 w-full relative rounded-none p-0 border-b border-divider",
              cursor: "w-full ",
              panel: "py-0 px-0",
            }}
          >
            <Tab key='support' title='Support'>
              <SupportTimeline />
            </Tab>
            <Tab key='post' title='Post'>
              <PostTimeline />
            </Tab>
            <Tab key='likes' title='Likes' />
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Profile;
