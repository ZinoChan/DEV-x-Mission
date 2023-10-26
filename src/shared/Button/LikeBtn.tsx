'use client';
import { like } from '@/actions/likes.action';
import { BiHeart } from 'react-icons/bi';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { BsFillHeartFill } from 'react-icons/bs';

type Props = {
  missionId: string;
  currRoute: string;
  likeCount: number;
  userLikes: boolean;
};

const LikeBtn = ({ missionId, currRoute, likeCount, userLikes }: Props) => {
  const [count, setCount] = useState(likeCount);
  const handleLike = async () => {
    const res = await like(missionId, currRoute);
    if (res.success && res.data != null) setCount(res.data);
    else toast(res.message);
  };

  return (
    <button
      onClick={handleLike}
      className='flex items-center text-gray-800 hover:text-red-500'
    >
      {userLikes ? (
        <BsFillHeartFill className='text-xl text-red-500' />
      ) : (
        <BiHeart className='text-xl' />
      )}
      <span className='ml-1'>{count}</span>
    </button>
  );
};

export default LikeBtn;
