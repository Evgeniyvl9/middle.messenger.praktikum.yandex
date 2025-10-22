function isNull(value:unknown){
	return value == null
}

function isBool(value:unknown){
	return typeof value === 'boolean' 
}

function isObject(value:unknown){
	return typeof value === 'object'
}

function isEmptyObject(value:unknown){
	if(isObject(value)){
		
	}
}

function isNum(value:unknown){
	return
}

export default  function isEmpty(value:unknown){
    if (value == null) return true;
    if (typeof value === 'boolean' || typeof value === 'number') return true;
    if (typeof value === 'string') return value.length === 0;
    if (Array.isArray(value)) return value.length === 0;
    if (value instanceof Map || value instanceof Set) return value.size === 0;
    if (typeof value === 'object') return Object.keys(value).length === 0;
    return true;
}