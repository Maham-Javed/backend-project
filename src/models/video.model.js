import mongoose, { Schema } from "mongoose";

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

const Video = mongoose.model("Video", videoSchema);
