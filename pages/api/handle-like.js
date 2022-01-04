import { sanityClient } from "../../lib/sanity";

sanityClient.config({
  token:
    "skRyCYZrwyTKd0V3ZvQUJBxIpzlIrnK5EJjeflERux4Xi0wsSixVSB9qDVt1FHE6yfigDvsInvY7FdAt8J5A5u7ImxdKCzX8YAxpRkLAIz3RIjJXYuAvWtaajJjU8Iwyk3eWMOQSMm5jQBX5JS3L2II4IJEDEhbjXMEXnqeWHsUbIsuW14Ju",
});

export default async function likeButtonHandler(req, res) {
  const { _id } = JSON.parse(req.body);
  const data = await sanityClient
    .patch(_id)
    .setIfMissing({ likes: 0 })
    .inc({ likes: 1 })
    .commit()
    .catch((error) => console.log(error));

  res.status(200).json({ likes: data.likes });
}
