import classNames from 'classnames';

// get link section's detail page
export const sectionDetailPageLink = (
  sectionContentType,
  detailId,
  sectionTitile,
  sectionId
) => {
  localStorage.setItem('sectionId', sectionId);

  for (const contentType of Object.values(sectionContentType)) {
    const contentTypeName = contentType.toLowerCase();
    const href = `/${contentTypeName}/${detailId}/details`;

    const link = (
      <a
        href={href}
        className={classNames('list__label truncate', {
          'text-bold': 0,
        })}
        title={sectionTitile}
      >
        {sectionTitile}
      </a>
    );
    return link;
  }
};
