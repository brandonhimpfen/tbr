// Inline JSON data
      var rankingData = {
        "blogs": [
          {
            "name": "Travel Blog 1",
            "contentScore": 9.2,
            "socialMediaScore": 8.5,
            "userExperienceScore": 8.8,
            "brandPartnershipScore": 7.5,
            "awardRecognitionScore": 6.2,
            "websitePerformanceScore": 8.1,
            "domainAuthorityScore": 9.6,
            "backlinksScore": 9.2,
            "totalScore": 77.1
          },
          {
            "name": "Travel Blog 2",
            "contentScore": 8.5,
            "socialMediaScore": 7.9,
            "userExperienceScore": 8.1,
            "brandPartnershipScore": 8.2,
            "awardRecognitionScore": 7.2,
            "websitePerformanceScore": 7.5,
            "domainAuthorityScore": 8.8,
            "backlinksScore": 7.6,
            "totalScore": 71.8
          },
          {
            "name": "Travel Blog 3",
            "contentScore": 8.9,
            "socialMediaScore": 9.1,
            "userExperienceScore": 7.9,
            "brandPartnershipScore": 6.8,
            "awardRecognitionScore": 8.5,
            "websitePerformanceScore": 8.2,
            "domainAuthorityScore": 8.1,
            "backlinksScore": 8.3,
            "totalScore": 75.8
          }
        ]
      };
      
      // Inline JavaScript for displaying ranking data
      var blogRanking = document.getElementById("blogRanking");
      var blogs = rankingData.blogs;
      var table = "<table class='table table-striped'><tr><th>Name</th><th>Content Score</th><th>Social Media Score</th><th>User Experience Score</th><th>Brand Partnership Score</th><th>Award Recognition Score</th><th>Website Performance Score</th><th>Domain Authority Score</th><th>Backlinks Score</th><th>Total Score</th></tr>";
      for (var i = 0; i < blogs.length; i++) {
        var blog = blogs[i];
        table += "<tr><td>" + blog.name + "</td><td class='center'>" + blog.contentScore + "</td><td class='center'>" + blog.socialMediaScore + "</td><td class='center'>" + blog.userExperienceScore + "</td><td class='center'>" + blog.brandPartnershipScore + "</td><td class='center'>" + blog.awardRecognitionScore + "</td><td class='center'>" + blog.websitePerformanceScore + "</td><td class='center'>" + blog.domainAuthorityScore + "</td><td class='center'>" + blog.backlinksScore + "</td><td class='center'>" + blog.totalScore + "</td></tr>";
      }
      table += "</table>";
      blogRanking.innerHTML = table;