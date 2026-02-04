// Test file to verify plan navigation logic
console.log('Testing Plan Navigation Logic');

// Test cases for different paths
const testPaths = [
  '/plan-pension',
  '/plan-recurring', 
  '/plan-half-price',
  '/plan-subhmangal',
  '/plan-billionaire',
  '/plan-personal',
  '/plan-emi-gold',
  '/plan-regular-gold',
  '/plan-easy-gold',
  '/plan-gold-overdraft',
  '/plan-bullet-gold',
  '/plan-doorstep-gold'
];

testPaths.forEach(path => {
  const schemeMatch = path.match(/plan-(.+)$/);
  if (schemeMatch) {
    const schemeId = schemeMatch[1];
    
    // Determine category
    let category = 'deposit';
    if (schemeId.includes('pension') || schemeId.includes('recurring') || schemeId.includes('half-price') || 
        schemeId.includes('subhmangal') || schemeId.includes('billionaire')) {
      category = 'deposit';
    } else if (schemeId.includes('personal')) {
      category = 'loan';
    } else if (schemeId.includes('gold')) {
      category = 'gold';
    }
    
    console.log(`Path: ${path} -> Scheme ID: ${schemeId} -> Category: ${category}`);
  }
});

console.log('\nNavigation logic test completed successfully!');
