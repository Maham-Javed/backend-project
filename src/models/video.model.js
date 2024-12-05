import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"; // use for write the custom queries and plugin

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // cloudinary url
      require: true,
    },
    thumbnail: {
      type: String, // cloudinary url
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      require: true,
    },
    views: {
      type: String,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

// after writhing this, now we can write aggrigation queries:
videoSchema.plugin(mongooseAggregatePaginate);

const Video = mongoose.model("Video", videoSchema);
