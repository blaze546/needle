function findNeedle(haystack) {
    const needleIndex = haystack.findIndex(item => item === "needle");
  
    if (needleIndex !== -1) {
      return `found the needle at position ${needleIndex}`;
    } else {
      return "needle not found in the haystack";
    }
  }