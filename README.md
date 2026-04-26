# CV Template

This is a simple static website template for your CV (Curriculum Vitae). It's designed to be easily customizable and deployable to AWS.

## Customization

1. Open `index.html` and replace the placeholders with your information:
   - Change "Your Name" to your actual name
   - Update the professional title and location
   - Fill in the About section with your introduction
   - Add your work experience in the Experience section
   - Update Education with your qualifications
   - List your skills in the Skills section
   - Update contact information

2. Modify `css/style.css` to change the styling if desired.

3. Update `js/script.js` for any additional functionality.

## Local Testing

To test locally, open `index.html` in your web browser.

## Deployment to AWS

### Prerequisites
- An AWS account
- AWS CLI installed and configured (optional, for automated deployment)

### Manual Deployment using AWS Console

1. **Create an S3 Bucket:**
   - Go to the AWS S3 console
   - Create a new bucket (e.g., `your-cv-bucket`)
   - Make sure the bucket name is unique globally

2. **Upload Files:**
   - Upload all files from this project to the S3 bucket
   - Make sure to upload the files in the correct folder structure (css/, js/)

3. **Enable Static Website Hosting:**
   - Go to the bucket properties
   - Enable "Static website hosting"
   - Set "Index document" to `index.html`
   - Note the endpoint URL provided

4. **Set Permissions:**
   - Go to the bucket permissions
   - Add a bucket policy to allow public read access:
     ```json
     {
         "Version": "2012-10-17",
         "Statement": [
             {
                 "Sid": "PublicReadGetObject",
                 "Effect": "Allow",
                 "Principal": "*",
                 "Action": "s3:GetObject",
                 "Resource": "arn:aws:s3:::your-cv-bucket/*"
             }
         ]
     }
     ```

5. **Access Your CV:**
   - Your CV will be available at the S3 endpoint URL (e.g., `http://your-cv-bucket.s3-website-us-east-1.amazonaws.com`)

### Optional: Using CloudFront for HTTPS and Custom Domain

For a more professional setup:
- Create a CloudFront distribution pointing to your S3 bucket
- Use Route 53 for custom domain
- Enable HTTPS with ACM (AWS Certificate Manager)

## Automated Deployment (Advanced)

If you have AWS CLI configured, you can use the following commands to deploy:

```bash
# Configure AWS CLI if not done
aws configure

# Create bucket
aws s3 mb s3://your-cv-bucket

# Upload files
aws s3 sync . s3://your-cv-bucket --exclude ".git/*" --exclude "README.md"

# Enable public access (adjust policy as needed)
aws s3api put-bucket-policy --bucket your-cv-bucket --policy file://bucket-policy.json
```

Create a `bucket-policy.json` file with the policy above.

## Cost

- S3 storage and requests are very low cost
- CloudFront adds minimal charges for global distribution

Enjoy your new CV website!