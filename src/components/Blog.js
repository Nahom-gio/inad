import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Experiential Marketing in 2024",
      excerpt: "Discover the latest trends and technologies that are shaping the future of experiential marketing and how brands can stay ahead of the curve.",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "How to Measure ROI in Experiential Campaigns",
      excerpt: "Learn the key metrics and strategies for measuring the return on investment in your experiential marketing campaigns.",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=400&fit=crop",
      date: "March 10, 2024"
    },
    {
      id: 3,
      title: "Creating Immersive Brand Experiences",
      excerpt: "Explore the art of crafting immersive brand experiences that engage all five senses and create lasting memories.",
      category: "Creative",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=400&fit=crop",
      date: "March 5, 2024"
    }
  ];

  return (
    <section className="section-padding bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends, strategies, and insights in experiential marketing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-dark-700/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-dark-600/30 hover:border-primary-500/50 transition-all duration-300">
                <div className="aspect-[2/1] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-300 text-sm font-medium rounded-full border border-primary-500/30">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary-400 hover:text-primary-300 font-medium transition-colors duration-300"
                  >
                    Read More →
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary text-lg px-10 py-4"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
