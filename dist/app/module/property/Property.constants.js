"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertySelectedFields = exports.propertyFilterableFields = exports.propertySearchableFields = exports.propertySortableFields = void 0;
exports.propertySortableFields = [
    "title",
    "price",
    "created_at",
    "updated_at",
    "status",
    "property_type",
];
exports.propertySearchableFields = ["title", "description"];
exports.propertyFilterableFields = [
    "page",
    "limit",
    "sortBy",
    "sortOrder",
    "searchTerm",
    "id",
    "slug",
    "property_type",
    "status",
];
exports.propertySelectedFields = {
    id: true,
    title: true,
    slug: true,
    description: true,
    price: true,
    feature_image: true,
    images: true,
    property_type: true,
    status: true,
    tags: true,
    documents: true,
    property_details: true,
    features: true,
    contact_info: true,
    location: true,
    created_at: true,
    updated_at: true,
    uploaded_by: {
        select: {
            first_name: true,
            last_name: true,
            email: true,
            contact_number: true,
            profile_pic: true,
            role: true,
        },
    },
};
