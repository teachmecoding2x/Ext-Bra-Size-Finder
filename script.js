document.getElementById('bra-size-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form inputs
  const underbust = parseInt(document.getElementById('underbust').value);
  const bust = parseInt(document.getElementById('bust').value);
  const bodyType = document.getElementById('body-type').value;
  const activityType = document.getElementById('activity-type').value;
  const fabricPreference = document.getElementById('fabric-preference').value;

  // Calculate bra size
  let bandSize = underbust + 4;
  let cupSize = Math.floor((bust - underbust) / 2);

  // Determine the bra size
  const braSizes = ["A", "B", "C", "D", "DD", "DDD"];
  const braSize = bandSize + braSizes[cupSize];

  // Define suggestions
  let braTypes = '';
  let fabricTypes = '';

  // Body Type Suggestions
  switch (bodyType) {
    case 'uneven':
      braTypes = 'Adjustable straps, contour bras, seamless bras.';
      break;
    case 'flat':
      braTypes = 'Light padding, push-up bras, bralettes.';
      break;
    case 'heavy':
      braTypes = 'Full coverage bras, underwired bras, sport bras.';
      break;
    default:
      braTypes = 'Regular bras, demi-cups, balconettes.';
      break;
  }

  // Activity Type Suggestions
  switch (activityType) {
    case 'workout':
      braTypes += ' High-impact sports bras, compression bras.';
      fabricTypes = 'Breathable fabrics like mesh, moisture-wicking materials.';
      break;
    case 'swimwear':
      braTypes += ' Swim bras, waterproof bras.';
      fabricTypes = 'Quick-drying fabrics like nylon, spandex.';
      break;
    case 'casual':
      braTypes += ' Wireless bras, soft-cup bras, cotton bras.';
      fabricTypes = 'Cotton, microfiber, smooth fabrics.';
      break;
    case 'formal':
      braTypes += ' Push-up bras, strapless bras, corsets.';
      fabricTypes = 'Silk, satin, lace.';
      break;
    case 'traditional':
      braTypes += ' Seamless, backless, strapless bras.';
      fabricTypes = 'Silk, satin for traditional attire.';
      break;
    default:
      fabricTypes = 'Cotton, microfiber.';
      break;
  }

  // Display results
  document.getElementById('bra-size-result').innerHTML = `Your recommended bra size: ${braSize}`;
  document.getElementById('bra-type-result').innerHTML = `Suggested bra types: ${braTypes}`;
  document.getElementById('fabric-type-result').innerHTML = `Suggested fabric types: ${fabricTypes}`;
});
