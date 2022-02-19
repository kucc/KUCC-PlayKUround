import { DataTypes, Sequelize } from 'sequelize';
import { PostInterface } from './postType';


const PostModel = (sequelize: Sequelize) => {
    const Post = sequelize.define<PostInterface>(
        'post',
        {
            content: {
                type: DataTypes.TEXT
            }
        }, {
        timestamps: true,
    }
    )
    return Post;
}

export default PostModel;