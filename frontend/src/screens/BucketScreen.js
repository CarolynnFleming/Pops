import React from 'react'
import bucketdata from '../bucketdata';
import Bucket from '../components/Bucket';
export default function BucketScreen() {
  return (
    <div className="row center">
    {
    bucketdata.bucket.map((bucket) =>(
      <Bucket key={bucket._id} bucket={bucket}></Bucket>

    ))
  }

  </div>
  )
}
