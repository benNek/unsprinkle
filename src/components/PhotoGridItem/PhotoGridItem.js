import React from "react";
import styled from "styled-components/macro";

function getSourceSet(src, format) {
  return `
    ${src} 1x,
    ${src.replace(".jpg", `@2x.${format}`)} 2x,
    ${src.replace(".jpg", `@3x.${format}`)} 3x
  `;
}

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Picture>
          <source type="image/avif" srcset={getSourceSet(src, "avif")} />
          <source type="image/webp" srcset={getSourceSet(src, "webp")} />
          <source srcset={getSourceSet(src, "jpg")} />
          <Image src={src} alt={alt} />
        </Picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Picture = styled.picture`
  display: block;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
