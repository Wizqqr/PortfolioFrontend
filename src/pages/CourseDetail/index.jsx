// import React from "react";
// import { useParams } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { Container, Typography, Box, Card, CardContent } from "@mui/material";
// import { ImageSection } from "../../components/ImageCarousel";

// export const CourseDetail = ({ refs }) => {
//   const { id } = useParams();
//   const { t } = useTranslation();

//   const courses = {
//     1: {
//       title: t("main.university"),
//       description: t("main.universityDescription"),
//       year: t("main.year"),
//       details: t("main.universityDetails"),
//     },
//     2: {
//       title: t("main.course"),
//       description: t("main.courseDescription"),
//       year: t("main.year"),
//       details: t("main.courseDetails"),
//     },
//     3: {
//       title: t("main.course2"),
//       description: t("main.course2Description"),
//       year: t("main.year2"),
//       details: t("main.course2Details"),
//     },
//   };

//   const course = courses[id];

//   if (!course) {
//     return (
//       <Container maxWidth="md" sx={{ textAlign: "center", mt: 4 }}>
//         <Typography variant="h4" color="error">
//           {t("main.courseNotFound")}
//         </Typography>
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//       {/* Header Section */}
//       <Box sx={{ mb: 4 }}>
//         <Typography variant="h3" component="h1" gutterBottom>
//           {course.title}
//         </Typography>
//         <Typography variant="body1" color="text.secondary">
//           {course.description}
//         </Typography>
//       </Box>

//       {/* Image Carousel Section */}
//       <Box sx={{ mb: 4 }}>
//         <Typography variant="h5" gutterBottom>
//           {t("main.gallery")}
//         </Typography>
//         <ImageSection />
//       </Box>

//       {/* Text Section */}
//       <Card sx={{ mb: 4, p: 2 }}>
//         <CardContent>
//           <Typography variant="h5" gutterBottom>
//             {t("main.about")}
//           </Typography>
//           <Typography variant="body1" sx={{ mb: 2 }}>
//             <strong>{t("main.year")}: </strong>
//             {course.year}
//           </Typography>
//           <Typography variant="body1">{course.details}</Typography>
//         </CardContent>
//       </Card>

//       {/* Additional Section */}
//       <Card sx={{ p: 2 }}>
//         <CardContent>
//           <Typography variant="h5" gutterBottom>
//             {t("main.courseDetailsHeader")}
//           </Typography>
//           <Typography variant="body1">
//             {t("main.courseExtraDetails")}
//           </Typography>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };